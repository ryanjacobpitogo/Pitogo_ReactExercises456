import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import meals from './data';


function App() {
  const [mealItems, setMealItems] = useState(meals);
  
  const itemCategories = ['all'];

  meals.map((meal) => {
      itemCategories.push(meal.category);
  });

  const allCategories = itemCategories.filter((meal, pos) => {
    return itemCategories.indexOf(meal) == pos;
  })

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