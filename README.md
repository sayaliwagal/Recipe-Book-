# Recipe Book 🍲

A simple, user-friendly recipe book app built with React.  
Allows users to add their own recipes (with image, ingredients, instructions, tags, and ratings), view recipes, search by name or ingredients, and store data in browser localStorage — so recipes persist across reloads.  

## 🔍 Demo / Live Site  
_If deployed (e.g. on Netlify), put the link here_  
[Live Demo](https://um-recipebook.netlify.app/)  

---

## 📖 Features

- Add new recipes with:
  - Name, Cuisine, Difficulty, Servings, Prep Time  
  - Meal types (e.g. Breakfast, Lunch, Dinner, Snack, Dessert) — multi-select  
  - Ingredients (comma separated)  
  - Instructions (comma separated)  
  - Tags (comma separated)  
  - Optional image — stored as Base64  
  - Rating & review count  
- Recipes stored in browser localStorage, so data persists even after refresh or close  
- List view of all recipes with pagination  
- Search recipes by name *or* by ingredients  
- Click on a recipe to view its full details (image, ingredients, steps, rating, tags, etc.)  
- Clean UI styled with Tailwind CSS  

---

## 🛠️ Built With

- React  
- Vite  
- Tailwind CSS  
- [react-select](https://github.com/JedWatson/react-select) for multi-select meal types  
- LocalStorage for persistent data  

---

## 🚀 Getting Started (Development)

These instructions will get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have:

- Node.js (v14+ recommended)  
- npm (or yarn)  

### Installation & Run

```bash
git clone https://github.com/sayaliwagal/Recipe-Book.git
cd Recipe-Book
npm install
npm run dev
