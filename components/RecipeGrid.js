import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ meals }) {

  if (!meals?.length) {

    return (

      <section className="py-24 text-center">

        <h2 className="text-4xl font-semibold">

          No recipes found

        </h2>

        <p className="mt-4 text-neutral-500">

          Try fewer ingredients or different tags.

        </p>

      </section>

    );

  }

  return (

    <section>

      <div
        className="
          mb-16
          flex
          items-end
          justify-between
        "
      >

        <div>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-neutral-500
            "
          >

            Recipes

          </p>

          <h2
            className="
              mt-3
              text-5xl
              font-semibold
            "
          >

            {meals.length} Results

          </h2>

        </div>

      </div>

      <div
        className="
          grid
          gap-x-10
          gap-y-16

          md:grid-cols-2

          xl:grid-cols-3
        "
      >

        {meals.map(meal => (

          <RecipeCard

            key={meal.idMeal}

            meal={meal}

          />

        ))}

      </div>

    </section>

  );

}