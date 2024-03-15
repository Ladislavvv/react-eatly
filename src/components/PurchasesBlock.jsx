import React from 'react'

function PurchasesBlock() {
  return (
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
  )
}

export default PurchasesBlock
