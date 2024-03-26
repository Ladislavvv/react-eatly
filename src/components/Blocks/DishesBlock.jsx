import React, { useContext, useEffect } from 'react';
import Dish from '../fragments/DishCard';
import ViewAllBtn from '../fragments/ViewAllBtn';
import { DishesList, RestaurantsList } from '../../App';

function DishesBlock() {
  const dishes = useContext(DishesList);
  const restaurants = useContext(RestaurantsList);

  const [sortedDishes, SetSortedDishes] = React.useState([]);

  function getSortedDishes(e) {
    // Сначала извлекаем все блюда из всех ресторанов
    const allDishes = e.flatMap((e) => e.dishes);

    // Затем сортируем их по рейтингу по убыванию
    const sortedDishes = allDishes.sort((a, b) => b.rating - a.rating);

    return sortedDishes;
  }

  React.useEffect(() => {
    SetSortedDishes(getSortedDishes(restaurants));
  }, []);
  // console.log(sortedDishes);

  return (
    <section className="dishes bottom-border">
      <h2 className="dishes__title section-title-h2">
        Our Top <span>Dishes</span>
      </h2>
      <ul className="cards-list">
        {sortedDishes.slice(0, 5).map((obj, index) => {
          return <Dish key={index} {...obj} />;
        })}
      </ul>
      <ViewAllBtn />
    </section>
  );
}

export default DishesBlock;
