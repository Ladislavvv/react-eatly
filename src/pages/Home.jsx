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
              Premium quality food is made with ingredients that <br /> are packed with essential vitamins,
              minerals.
            </li>
            <li className="sideText__list-item">
              These foods promote overall wellness by support <br /> healthy digestion and boosting
              immunity
            </li>
          </ul>
          <button className="sideText__btn">Download</button>
        </div>
      </section>
    </>
  );
}

export default Home;
