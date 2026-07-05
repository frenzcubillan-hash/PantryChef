import Link from "next/link";

export default function RecipeCard({ meal }) {

  return (

    <Link
      href={`/recipe/${meal.idMeal}`}
      className="group block"
    >

      <article>

        <div className="overflow-hidden">

          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="
              aspect-[4/5]
              w-full
              object-cover
              duration-500
              group-hover:scale-105
            "
          />

        </div>

        <div className="mt-6">

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.28em]
              text-neutral-500
            "
          >

            {meal.strArea}

            {meal.strCategory
              ? ` • ${meal.strCategory}`
              : ""}

          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-semibold
              leading-tight
              duration-200
              group-hover:text-amber-700
            "
          >

            {meal.strMeal}

          </h2>

          <div
            className="
              mt-6
              h-px
              bg-stone-200
            "
          />

        </div>

      </article>

    </Link>

  );

}