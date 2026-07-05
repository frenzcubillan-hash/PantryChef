import Link from "next/link";
import { getMeal } from "@/lib/mealdb";

export default async function RecipePage({ params }) {

  // ✅ FIX: unwrap params (Next.js 15 requirement)
  const { id } = await params;

  const meal = await getMeal(id);

  if (!meal) {
    return (
      <main className="min-h-screen bg-[#F8F4EC] flex items-center justify-center">
        <h1 className="text-5xl">
          Recipe not found.
        </h1>
      </main>
    );
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {

    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure,
      });
    }

  }

  const directions = (meal.strInstructions ?? "")
    .split(/\r?\n/)
    .filter(step => step.trim());

  return (

    <main className="bg-[#F8F4EC] text-[#1B1B1B]">

      <section className="container py-12">

        <Link
          href="/"
          className="editorial-link text-sm uppercase tracking-[.35em] text-neutral-500"
        >
          ← Back to recipes
        </Link>

        <div className="mt-12">

          <p className="text-xs uppercase tracking-[.45em] text-neutral-500">
            {meal.strArea}
            {meal.strCategory && ` • ${meal.strCategory}`}
          </p>

          <h1 className="mt-5 text-7xl lg:text-8xl leading-[0.9]">
            {meal.strMeal}
          </h1>

        </div>

        <div className="mt-16">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="hero-image"
          />
        </div>

        <div className="editorial-divider mt-20"></div>

        <div className="mt-20 grid gap-24 lg:grid-cols-[320px_1fr]">

          <aside>
            <h2 className="text-sm uppercase tracking-[.4em]">
              Ingredients
            </h2>

            <ul className="mt-10">

              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-[var(--border)] py-5"
                >
                  <p className="text-sm text-neutral-500">
                    {item.measure}
                  </p>

                  <p className="mt-2 text-lg">
                    {item.ingredient}
                  </p>
                </li>
              ))}

            </ul>
          </aside>

          <section>

            <h2 className="text-sm uppercase tracking-[.4em]">
              Directions
            </h2>

            <div className="recipe-copy mt-10">

              {directions.map((step, index) => (
                <div
                  key={index}
                  className="mb-14 grid gap-8 lg:grid-cols-[60px_1fr]"
                >

                  <span className="text-5xl text-neutral-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{step}</p>

                </div>
              ))}

            </div>

          </section>

        </div>

        {(meal.strYoutube || meal.strSource) && (
          <>
            <div className="editorial-divider mt-24"></div>

            <div className="mt-12 flex flex-wrap gap-5">

              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black px-8 py-4 transition hover:bg-black hover:text-white"
                >
                  Watch Video
                </a>
              )}

              {meal.strSource && (
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black px-8 py-4 transition hover:bg-black hover:text-white"
                >
                  Original Recipe
                </a>
              )}

            </div>
          </>
        )}

      </section>

    </main>
  );
}