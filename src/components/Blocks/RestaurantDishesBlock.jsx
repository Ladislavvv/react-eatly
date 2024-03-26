import React, { useContext } from 'react';
import Dish from '../fragments/DishCard';
import ViewAllBtn from '../fragments/ViewAllBtn';

function DishesBlock() {
const dishes = [];
  return (
    <section className="dishes bottom-border">
      <h2 className="dishes__title section-title-h2">
        Our Top <span>Dishes</span>
      </h2>
      <ul className="cards-list">
        {dishes.slice(0, 5).map( (obj, index) => {
          return <Dish key={index} {...obj} />
        })}
      </ul>
      <ViewAllBtn/>
    </section>
  );
}

export default DishesBlock;
