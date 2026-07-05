"use client";

import { useState } from "react";

import SearchBar from "./SearchBar";
import RecipeGrid from "./RecipeGrid";

export default function HomePage({ initialMeals }) {

  const [meals, setMeals] = useState(initialMeals);
  const [loading, setLoading] = useState(false);

  async function handleSearch(ingredients) {

    setLoading(true);

    try {

      const response = await fetch("/api/search", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ingredients,
        }),

      });

      const data = await response.json();

      setMeals(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  }

  return (

    <main className="min-h-screen bg-[#F7F4ED]">

      <section
        className="
        mx-auto
        max-w-[1280px]
        px-8
        pt-24
        pb-20
      "
      >

        <div
          className="
          mx-auto
          max-w-4xl
          text-center
        "
        >

          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.45em]
            text-amber-700
          "
          >

            PantryChef

          </p>

          <h1
            className="
            mt-6
            text-5xl
            leading-none
            font-semibold

            md:text-7xl

            lg:text-[88px]
          "
          >

            Cook with
            <br />
            what you already have.

          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-neutral-600
          "
          >

            Add the ingredients sitting in your pantry and
            discover recipes you can cook today.

          </p>

        </div>

        <div
          className="
          mx-auto
          mt-20
          max-w-5xl
        "
        >

          <SearchBar
            onSearch={handleSearch}
          />

        </div>

        <div className="mt-24">

          {loading ? (

            <div className="py-20 text-center">

              <p className="text-neutral-500">

                Searching recipes...

              </p>

            </div>

          ) : (

            <RecipeGrid
              meals={meals}
            />

          )}

        </div>

      </section>

    </main>

  );

}