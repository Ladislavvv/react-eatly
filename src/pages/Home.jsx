import React from 'react';
import { Link } from 'react-router-dom';
import IntroBlock from '../components/Blocks/IntroBlock';
import Statistics from '../components/Blocks/StatisticsBlock';
import MobileAppBlock from '../components/Blocks/MobileAppBlock';
import RestaurantsBlock from '../components/Blocks/RestaurantsBlock';
import DishesBlock from '../components/Blocks/DishesBlock';
import PurchasesBlock from '../components/Blocks/PurchasesBlock';
import BannerBlock from '../components/Blocks/BannerBlock';

function Home() {
  return (
    <>
      <IntroBlock />
      <Statistics />
      <MobileAppBlock />
      <RestaurantsBlock />
      <DishesBlock />
      <PurchasesBlock />
      <BannerBlock />
    </>
  );
}

export default Home;
