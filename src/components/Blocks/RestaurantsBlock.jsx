import React, { useContext } from 'react';
import ViewAllBtn from '../fragments/ViewAllBtn';
import RestaurantCard from '../fragments/RestaurantCard';
import { RestaurantsList } from '../../App';

function RestaurantsBlock() {
  const restaurants = useContext(RestaurantsList);
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
