import React from 'react';
import getHighlight from './getHighlight';
import { Link } from 'react-router-dom';

function RestaurantCard({ id, img, title, highlight, timeToCook, rating }) {
  return (
    <li className="restaurants__section_list-item restaurant__card">
      <Link to={`/menu/restaurant/${id}`}>
        <img className="card-img" src={img.url} alt={img.alt} />
        <div className="restaurant__card_info">
          {getHighlight(highlight)}
          <h3 className="card-info-title">{title}</h3>
          <ul className="card-info_list">
            <li className="card-info_list-item">{timeToCook}min •</li>
            <li className="card-info_list-item">
              <img className="restaurant-star" src="/img/star.svg" alt="" />
            </li>
            <li className="card-info_list-item">{rating}</li>
          </ul>
        </div>
      </Link>
    </li>
  );
}

export default RestaurantCard;
