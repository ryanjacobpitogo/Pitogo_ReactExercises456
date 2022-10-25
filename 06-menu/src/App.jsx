import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import meals from './data';

const allCategories = ['all', ...new Set(meals.map((meal) => meal.category))];

function App() {
  const [mealItems, setMealItems] = useState(meals);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMealItems(meals);
      return;
    }
    const newMeals = meals.filter((meal) => meal.category === category);
    setMealItems(newMeals);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu meals={mealItems} />
      </section>
    </main>
  );
}

export default App;