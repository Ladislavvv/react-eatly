import React from 'react'

function DishesBlock() {
  return (
    <section className="dishes bottom-border">
        <h2 className="dishes__title section-title-h2">
          Our Top <span>Dishes</span>
        </h2>
        <ul className="cards-list">
          <li className="dishes__list-item food-card">
            <button className="favourite-btn"></button>
            <img className="card-img" src="/img/food-image.png" alt="Salad" />
            <div className="card-info">
              <span className="card-highlite-yellow">Healthy</span>
              <h3 className="card-info-title">Chicken Hell</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
              <div className="card-info_footer">
                <p className="card-info-price">
                  $12<span>.99</span>
                </p>
                <button className="card-info-btn"></button>
              </div>
            </div>
          </li>
          <li className="dishes__list-item food-card">
            <button className="favourite-btn"></button>
            <img className="card-img" src="/img/food-image.png" alt="Salad" />
            <div className="card-info">
              <span className="card-highlite-red">Healthy</span>
              <h3 className="card-info-title">Chicken Hell</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
              <div className="card-info_footer">
                <p className="card-info-price">
                  $12<span>.99</span>
                </p>
                <button className="card-info-btn"></button>
              </div>
            </div>
          </li>
          <li className="dishes__list-item food-card">
            <button className="favourite-btn"></button>
            <img className="card-img" src="/img/food-image.png" alt="Salad" />
            <div className="card-info">
              <span className="card-highlite-green">Healthy</span>
              <h3 className="card-info-title">Chicken Hell</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
              <div className="card-info_footer">
                <p className="card-info-price">
                  $12<span>.99</span>
                </p>
                <button className="card-info-btn"></button>
              </div>
            </div>
          </li>
          <li className="dishes__list-item food-card">
            <button className="favourite-btn"></button>
            <img className="card-img" src="/img/food-image.png" alt="Salad" />
            <div className="card-info">
              <span className="card-highlite-yellow">Healthy</span>
              <h3 className="card-info-title">Chicken Hell</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
              <div className="card-info_footer">
                <p className="card-info-price">
                  $12<span>.99</span>
                </p>
                <button className="card-info-btn"></button>
              </div>
            </div>
          </li>
          <li className="dishes__list-item food-card">
            <button className="favourite-btn"></button>
            <img className="card-img" src="/img/food-image.png" alt="Salad" />
            <div className="card-info">
              <span className="card-highlite-red">Healthy</span>
              <h3 className="card-info-title">Chicken Hell</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
              <div className="card-info_footer">
                <p className="card-info-price">
                  $12<span>.99</span>
                </p>
                <button className="card-info-btn"></button>
              </div>
            </div>
          </li>
        </ul>
        <div className="view-link-wrapper">
          <a className="view-link" href="#">
            View All
          </a>
        </div>
      </section>
  )
}

export default DishesBlock
