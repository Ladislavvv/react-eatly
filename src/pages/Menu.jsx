import React from 'react';
import RestaurantsBlock from '../components/Blocks/RestaurantsBlock';
import DishesBlock from '../components/Blocks/DishesBlock';
import AccordionBlock from '../components/Blocks/AccordionBlock';

function Menu() {
  return (
    <>
      <RestaurantsBlock />
      <DishesBlock />
      <AccordionBlock />
    </>
  );
}

export default Menu;
