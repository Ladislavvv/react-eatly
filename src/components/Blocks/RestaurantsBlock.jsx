import React from 'react';
import ViewAllBtn from '../fragments/ViewAllBtn';
import RestaurantCard from '../fragments/RestaurantCard';

function RestaurantsBlock() {
  const restaurants = [
    {
      id: 0,
      title: 'The Chicken King',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Healthy',
      timeToCook: 24,
      rating: 4.5,
    },
    {
      id: 1,
      title: 'The Burger King',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Trending',
      timeToCook: 26,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Chicken King',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Supreme',
      timeToCook: 27,
      rating: 5.0,
    },
    {
      id: 3,
      title: 'Chicken Hell',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Healthy',
      timeToCook: 24,
      rating: 4.5,
    },
  ];

  return (
    <section className="restaurants__section bottom-border">
      <h2 className="restaurants__section-title section-title-h2">
        Our Top <span>Restaurants</span>
      </h2>
      <ul className="restaurants__section_list cards-list">
        {restaurants.slice(0, 3).map((el, index) => {
          return <RestaurantCard key={index} {...el} />;
        })}
      </ul>
      <ViewAllBtn />
    </section>
  );
}

export default RestaurantsBlock;
