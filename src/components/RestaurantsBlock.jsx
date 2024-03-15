import React from 'react'

function RestaurantsBlock() {
  return (
    <section className="restaurants__section bottom-border">
        <h2 className="restaurants__section-title section-title-h2">
          Our Top <span>Restaurants</span>
        </h2>
        <ul className="restaurants__section_list cards-list">
          <li className="restaurants__section_list-item restaurant__card">
            <img className="card-img" src="/img/restaurant-image1.png" alt="chiken" />
            <div className="restaurant__card_info">
              <span className="card-highlite-yellow">Healthy</span>
              <h3 className="card-info-title">The Chicken King</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
            </div>
          </li>
          <li className="restaurants__section_list-item restaurant__card">
            <img className="card-img" src="/img/restaurant-image1.png" alt="chiken" />
            <div className="restaurant__card_info">
              <span className="card-highlite-red">Healthy</span>
              <h3 className="card-info-title">The Chicken King</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
            </div>
          </li>
          <li className="restaurants__section_list-item restaurant__card">
            <img className="card-img" src="/img/restaurant-image1.png" alt="chiken" />
            <div className="restaurant__card_info">
              <span className="card-highlite-green">Healthy</span>
              <h3 className="card-info-title">The Chicken King</h3>
              <ul className="card-info_list">
                <li className="card-info_list-item">24min •</li>
                <li className="card-info_list-item">
                  <img className="restaurant-star" src="/img/star.svg" alt="" />
                </li>
                <li className="card-info_list-item">4.8</li>
              </ul>
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

export default RestaurantsBlock
