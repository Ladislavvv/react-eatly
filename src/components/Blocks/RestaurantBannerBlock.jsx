import React, { useContext } from 'react';
import { RestaurantsList } from '../../App';

function RestaurantBannerBlock({ id }) {
  const restaurants = useContext(RestaurantsList);
  const { timeToCook, rating } = restaurants.find((el) => el.id === id);
  return (
    <div className="single-restaurant__banner">
      <img src="/img/single-restaurant.png" alt="Chiken" />
      <ul>
        <li>
          <h2>The Chicken King (id:{id})</h2>
        </li>
        <li className="single-banner-item">
          <p>{timeToCook}min •</p>
          <img className="restaurant-star" src="/img/star.svg" alt="Rating star" />
          <span>{rating}</span>
        </li>
        <li>
          <img src="/img/Bookmark.svg" alt="Bookmark" />
        </li>
      </ul>
    </div>
  );
}

export default RestaurantBannerBlock;
