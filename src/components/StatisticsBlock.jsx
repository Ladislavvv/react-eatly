import React from 'react'

function StatisticsBlock() {
  return (
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
  )
}

export default StatisticsBlock
