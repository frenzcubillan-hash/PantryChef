const BASE_URL =
  "https://www.themealdb.com/api/json/v1/1";

export async function searchByIngredient(ingredient) {

  const response = await fetch(

    `${BASE_URL}/filter.php?i=${encodeURIComponent(
      ingredient
    )}`,

    {
      cache: "no-store",
    }

  );

  const data = await response.json();

  return data.meals || [];

}

export async function getMeal(id) {

  const response = await fetch(

    `${BASE_URL}/lookup.php?i=${id}`,

    {
      cache: "no-store",
    }

  );

  const data = await response.json();

  return data.meals?.[0];

}