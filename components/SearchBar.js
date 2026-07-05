"use client";

import { useState, useEffect } from "react";

const POPULAR = [
  "chicken",
  "beef",
  "egg",
  "rice",
  "potato",
  "tomato",
  "onion",
  "garlic",
  "pork",
  "carrot",
  "cheese",
  "milk",
];

export default function SearchBar({ onSearch }) {

  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  function addIngredient(value) {

    const clean = value.trim().toLowerCase();
    if (!clean) return;

    setIngredients(prev => {
      if (prev.includes(clean)) return prev;
      return [...prev, clean];
    });

    setInput("");
  }

  function removeIngredient(value) {

    setIngredients(prev =>
      prev.filter(item => item !== value)
    );

  }

  function handleSubmit(e) {
    e.preventDefault();

    let current = [...ingredients];

    const inputValue = input.trim().toLowerCase();

    if (inputValue && !current.includes(inputValue)) {
      current.push(inputValue);
    }

    onSearch(current);
  }

  if (!mounted) {
    return (
      <div className="h-64 bg-white border border-stone-200 rounded-2xl" />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-10"
    >

      <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
        Popular Ingredients
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {POPULAR.map(item => (
          <button
            key={item}
            type="button"
            onClick={() => addIngredient(item)}
            className="rounded-full border border-stone-300 px-6 py-3 text-sm hover:border-black"
          >
            {item}
          </button>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type ingredient and press Enter"
        className="mt-10 w-full rounded-xl border border-stone-300 px-6 py-4 text-lg"
      />

      {ingredients.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {ingredients.map(item => (
            <button
              key={item}
              type="button"
              onClick={() => removeIngredient(item)}
              className="rounded-full bg-black px-5 py-2 text-white"
            >
              {item} ×
            </button>
          ))}
        </div>
      )}

      <button
        type="submit"
        className="mt-10 w-full rounded-xl bg-black py-4 text-white"
      >
        Find Recipes
      </button>

    </form>
  );
}