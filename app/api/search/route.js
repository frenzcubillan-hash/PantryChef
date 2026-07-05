import { searchByIngredient, getMeal } from "@/lib/mealdb";
import { aliases } from "@/lib/aliases";

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      const map = {
        potatoes: "potato",
        tomatoes: "tomato",
        carrots: "carrot",
        onions: "onion",
        mushrooms: "mushroom",
        peppers: "pepper",
        chillies: "chili",
        chilies: "chili",
        eggs: "egg",
        cloves: "clove",
      };

      if (map[word]) return map[word];

      if (
        word.endsWith("s") &&
        word.length > 3 &&
        !word.endsWith("ss")
      ) {
        return word.slice(0, -1);
      }

      return word;
    });
}

function ingredientMatches(recipeIngredient, searchTag) {
  const recipeWords = normalize(recipeIngredient);

  const canonical = searchTag.toLowerCase();

  const variants = aliases[canonical] || [canonical];

  for (const variant of variants) {
    const variantWords = normalize(variant);

    if (
      variantWords.every((word) =>
        recipeWords.includes(word)
      )
    ) {
      return true;
    }

    if (
      recipeWords.some((word) =>
        variantWords.includes(word)
      )
    ) {
      return true;
    }
  }

  return false;
}

export async function POST(req) {
  try {

    // ✅ FIX: safe JSON parsing (prevents crash if invalid body is sent)
    let ingredients = [];

    try {
      const body = await req.json();
      ingredients = body?.ingredients || [];
    } catch (err) {
      console.error("Invalid JSON body:", err);
      return Response.json([]);
    }

    if (!ingredients?.length) {
      return Response.json([]);
    }

    const tags = ingredients
      .map((x) => x.trim().toLowerCase())
      .filter(Boolean);

    const searchResults = await Promise.all(
      tags.map(searchByIngredient)
    );

    const uniqueMeals = new Map();

    for (const meals of searchResults) {
      if (!meals) continue;

      for (const meal of meals) {
        uniqueMeals.set(meal.idMeal, meal);
      }
    }

    const fullMeals = await Promise.all(
      [...uniqueMeals.values()].map((meal) =>
        getMeal(meal.idMeal)
      )
    );

    const results = [];

    for (const meal of fullMeals) {
      if (!meal) continue;

      const recipeIngredients = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];

        if (ingredient && ingredient.trim() !== "") {
          recipeIngredients.push(ingredient);
        }
      }

      const matched = tags.every((tag) =>
        recipeIngredients.some((ingredient) =>
          ingredientMatches(ingredient, tag)
        )
      );

      if (matched) {
        results.push(meal);
      }
    }

    results.sort((a, b) =>
      a.strMeal.localeCompare(b.strMeal)
    );

    return Response.json(results);

  } catch (err) {
    console.error(err);
    return Response.json([]);
  }
}