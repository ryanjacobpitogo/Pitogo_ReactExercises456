import React from 'react';

const Menu = ({ meals }) => {
  return (
    <div className="section-center">
      {meals.map((mealItem) => {
        const { id, title, img, desc } = mealItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">$15</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;