import React from 'react';
import getHighlight from './getHighlight';

function Dish({ title, img, highlight, timeToCook, rating, price }) {
  return (
    <li className="dishes__list-item food-card">
      <button className="favourite-btn"></button>
      <img className="card-img" src={img.url} alt={img.alt} />
      <div className="card-info">
        {getHighlight(highlight)}
        <h3 className="card-info-title">{title}</h3>
        <ul className="card-info_list">
          <li className="card-info_list-item">{timeToCook}min •</li>
          <li className="card-info_list-item">
            <img className="restaurant-star" src="/img/star.svg" alt="" />
          </li>
          <li className="card-info_list-item">{rating}</li>
        </ul>
        <div className="card-info_footer">
          <p className="card-info-price">
            ${parseInt(price)}
            <span>.{Math.round((price * 100) % 100)}</span>
          </p>
          <button className="card-info-btn"></button>
        </div>
      </div>
    </li>
  );
}

export default Dish;
