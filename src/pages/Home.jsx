import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="intro__section">
        <ul className="intro__section_list">
          <li className="intro__section_list-item noteText">OVER 1000 USERS</li>
          <li className="intro__section_list-item title">
            Enjoy Foods All Over The <span>World</span>
          </li>
          <li className="intro__section_list-item detailsText">
            <p>
              EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more
              details and get paychecks up to two days early. Get a <span>$20 bonus.</span>
            </p>
          </li>
          <li className="intro__section_list-item buttons">
            <button className="filled-btn">Get Started</button>
            <button className="btn">Go Pro</button>
          </li>
          <li className="intro__section_list-item rating-block">
            <ul className="rating__list">
              <li className="rating__list-item rating-icon">
                <img src="/img/trustpilot.svg" alt="trustpilot" />
              </li>
              <li className="rating__list-item">
                <ul className="rating__stars">
                  {Array(5)
                    .fill()
                    .map((_, index) => {
                      return (
                        <li key={index} className="rating__stars_item">
                          <img src="/img/rating-star.svg" alt="rating" />
                        </li>
                      );
                    })}
                </ul>
              </li>
              <li className="rating__list-item stars-count">4900+</li>
            </ul>
          </li>
        </ul>
        <div className="intro__section_img">
          <img src="/img/intro-section-hero.png" alt="Salad" />
        </div>
      </section>
      <section className="statistics__section">
        <div className="bg"></div>
        <ul className="statistics__section_list">
          <li className="statistics__section_list-item">
            <ul>
              <li>10K+</li>
              <li>
                Satisfied Costumers <br /> All Great Over The World
              </li>
            </ul>
          </li>
          <li className="statistics__section_list-item">
            <ul>
              <li>4M</li>
              <li>
                Healthy Dishes Sold <br />
                Including Milk Shakes Smooth
              </li>
            </ul>
          </li>
          <li className="statistics__section_list-item">
            <ul>
              <li>99.99%</li>
              <li>
                Reliable Customer Support <br /> We Provide Great Experiences
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mobile-app__section">
        <img className="mobile-app__section-img" src="/img/mobile.png" alt="phone app" />
        <div className="mobile-app__section_sideText">
          <h2 className="sideText__title">
            Premium <span>Quality</span> <br /> For Your Health
          </h2>
          <ul className="sideText__list">
            <li className="sideText__list-item">
              Premium quality food is made with ingredients that <br /> are packed with essential
              vitamins, minerals.
            </li>
            <li className="sideText__list-item">
              These foods promote overall wellness by support <br /> healthy digestion and boosting
              immunity
            </li>
          </ul>
          <button className="sideText__btn">Download</button>
        </div>
      </section>
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
      <section className="purchases bottom-border">
        <div className="purchases-aside">
          <h2 className="purchases-title section-title-h2">
            Control <span>Purchases</span>
            <br />
            Via Dashboard
          </h2>
          <ul className="purchases__list">
            <li className="purchases__list-item">
              <div>
                <img src="/img/food-image.png" alt="food" />
                <div>
                  <h3>Chicken Hell</h3>
                  <p>On The Way</p>
                </div>
              </div>
              <span>3:09 PM</span>
            </li>
            <li className="purchases__list-item">
              <div>
                <img src="/img/food-image.png" alt="food" />
                <div>
                  <h3>Swe Dish</h3>
                  <p>Delivered</p>
                </div>
              </div>
              <span>3:09 PM</span>
            </li>
            <li className="purchases__list-item">
              <div>
                <img src="/img/food-image.png" alt="food" />
                <div>
                  <h3>Fish Hell Veg</h3>
                  <p className="cancelled">Cancelled</p>
                </div>
              </div>
              <span>Yesterday</span>
            </li>
          </ul>
        </div>
        <div className="purchases-stats">
          <ul className="purchases-stats__top">
            <li className="purchases-stats__top-title">Purchases</li>
            <li className="purchases-stats__top-btn">
              <button>
                This month
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.4209 10.2529L12.7033 16.5353L18.9856 10.2529"
                    stroke="#1A202C"
                    strokeWidth="2.35588"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <ul className="purchases-stats__list">
            <li className="purchases-stats__list-item purchases-card">
              <ul>
                <li>
                  <img src="/img/expense-icon.svg" alt="Expense" />
                  <div>
                    <h3 className="purchases-card-title">Expense</h3>
                    <p className="purchases-card-subTitle">Increased By 10%</p>
                  </div>
                </li>
                <li>
                  <p className="purchases-card-count">$409.00</p>
                </li>
              </ul>
              <div className="purchases-card-progress-bar">
                <div className='progress-fill'></div>
              </div>
            </li>
            <li className="purchases-stats__list-item purchases-card">
              <ul>
                <li>
                  <img src="/img/expense-icon.svg" alt="Expense" />
                  <div>
                    <h3 className="purchases-card-title">Vocher Usage</h3>
                    <p className="purchases-card-subTitle">Increased By 5%</p>
                  </div>
                </li>
                <li>
                  <p className="purchases-card-count">$45.78</p>
                </li>
              </ul>
              <div className="purchases-card-progress-bar">
                <div className='progress-fill'></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className='banner'>
        <h2 className='banner-title'>GET 50%</h2>
        <form className='subscribe-form'>
          <input type="email" placeholder='Enter Your Email Address' />
          <button type='submit'>subscribe</button>
        </form>
        <img className='banner-img' src="/img/food-image.png" alt="Salad" />
      </section>
    </>
  );
}

export default Home;
