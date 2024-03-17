import React from 'react';
import Dish from '../fragments/DishCard';
import ViewAllBtn from '../fragments/ViewAllBtn';

function DishesBlock() {
  const dishes = [
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Supreme',
      timeToCook: 24,
      rating: 4.5,
      price: 19.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Trending',
      timeToCook: 28,
      rating: 4.8,
      price: 4.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Supreme',
      timeToCook: 15,
      rating: 4.5,
      price: 6.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Trending',
      timeToCook: 32,
      rating: 3.4,
      price: 7.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Healthy',
      timeToCook: 25,
      rating: 5.0,
      price: 48.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Supreme',
      timeToCook: 30,
      rating: 4.8,
      price: 15.99,
    },
  ];

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
