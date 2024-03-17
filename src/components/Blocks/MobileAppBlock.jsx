import React from 'react'

function MobileAppBlock() {
  return (
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
  )
}

export default MobileAppBlock
