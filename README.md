link: https://pantry-chef-lake.vercel.app/
# 🥘 PantryChef

Cook smarter with the ingredients you already have.

PantryChef is a web application that helps users discover recipes based on the ingredients they already have at home. Instead of searching for recipes one by one, I simply add the ingredients available in my pantry, and PantryChef finds meals that match them. This project focuses on making cooking easier, reducing food waste, and helping users make the most of what they already have.

---

# 💡 Inspiration

I built PantryChef because I often found myself staring at the refrigerator wondering what I could cook with the ingredients I already had. Most recipe websites require searching for a specific dish first, but I wanted the opposite experience—I wanted to search using my available ingredients and let the recipes come to me.

I was also inspired by modern editorial food websites, particularly Food52, because of its clean design, beautiful photography, and easy-to-read layouts. While PantryChef has its own design and functionality, I wanted it to feel simple, modern, and enjoyable to browse.

---

# 🛠️ Tools & Technologies Used

### Frontend
- Next.js 16 (App Router)
- React
- JavaScript
- Tailwind CSS

### API
- TheMealDB API

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Vercel (Deployment)

---

# 💻 Programming Languages

- JavaScript
- HTML
- CSS (Tailwind CSS)

---

# 🍽️ API Details

This project uses the free **TheMealDB API**, which provides recipe information, meal images, ingredients, cooking instructions, categories, cuisines, and YouTube tutorials.

### Main API Endpoints Used

#### 🔍 Search recipes by ingredient

```text
https://www.themealdb.com/api/json/v1/1/filter.php?i=ingredient
```

This endpoint is used whenever I search for an ingredient. PantryChef searches each selected ingredient individually and gathers all possible recipes.

---

#### 📖 Get complete recipe details

```text
https://www.themealdb.com/api/json/v1/1/lookup.php?i=MEAL_ID
```

After collecting possible recipes, PantryChef retrieves the complete recipe information, including:

- Ingredients
- Measurements
- Cooking instructions
- Meal image
- Cuisine
- Category
- YouTube tutorial
- Original recipe source

---

### How PantryChef Works

1. I select multiple ingredients.
2. PantryChef searches each ingredient separately using TheMealDB API.
3. It combines all possible recipes.
4. It removes duplicate recipes.
5. It checks every recipe's complete ingredient list.
6. It only displays recipes that contain all of the selected ingredients.

This makes the search results much more accurate than simply searching for a single ingredient.

---

# ✨ Features

- 🥩 Search recipes using multiple ingredients
- 🏷️ Ingredient tag system
- 🔍 Smart ingredient filtering
- 📖 Complete recipe instructions
- 🍴 Ingredient and measurement lists
- 🌎 Displays recipe cuisine and category
- ▶️ Direct YouTube cooking tutorial links
- 📱 Responsive design for desktop and mobile
- ⚡ Fast loading using Next.js App Router

---

# 🌱 Implications

Building PantryChef helped me understand how multiple API requests can work together to create a smarter search experience. Instead of relying on a single search, I learned how to combine multiple API responses, filter data, and present only the most relevant results to users.

From a practical perspective, PantryChef encourages people to make better use of the ingredients they already have at home. This can help reduce unnecessary grocery purchases, minimize food waste, and make meal planning much easier. I also gained valuable experience in frontend development, API integration, data filtering, and designing user-friendly interfaces using modern web technologies.

---

# 🚀 Future Improvements

Some features I would like to add in the future include:

- ❤️ Save favorite recipes
- 🛒 Shopping list generator
- 🧠 AI recipe recommendations
- 🥗 Dietary filters (Vegetarian, Vegan, Gluten-Free)
- ⭐ Recipe ratings and reviews
- 🔖 Recently viewed recipes
- 🌙 Dark mode
- 📤 Share recipes with friends

---

# 👨‍💻 Developed By

**Frenz Edmund Rodolf Evangelista Cubillan**

Computer Engineering Graduate

Passionate about building practical software solutions, modern web applications, AI-powered tools, and systems that solve real-world problems.
