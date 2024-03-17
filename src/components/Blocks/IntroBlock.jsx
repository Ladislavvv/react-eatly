import React from 'react'

function IntroBlock() {
  return (
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
  )
}

export default IntroBlock
