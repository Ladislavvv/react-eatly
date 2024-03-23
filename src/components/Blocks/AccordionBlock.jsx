import React, { useState } from 'react';

function AccordionBlock() {
  const data = [
    {
      title: 'How long does delivery take?',
      content:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      title: 'How long does delivery take?',
      content:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      title: 'How long does delivery take?',
      content:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      title: 'How long does delivery take?',
      content:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
    {
      title: 'How long does delivery take?',
      content:
        'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?',
    },
  ];

  const [activeIndex, setActiveIndex] = useState();

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section className="accordion__section">
      <h2 className="section-title-h2">
        Frequently Asked <br /> <span>Questions</span>
      </h2>
      <ul className="accordion__list">
        {data.map((item, index) => {
          return (
            <li onClick={() => handleClick(index)} key={index} className="accordion__list-item">
              <div className="accordion-header">
                <h3>{item.title}</h3>
                <button></button>
              </div>
              <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default AccordionBlock;
