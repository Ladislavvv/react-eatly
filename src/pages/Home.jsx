import React from 'react';
import { Link } from 'react-router-dom';
import IntroBlock from '../components/IntroBlock';
import Statistics from '../components/StatisticsBlock';
import MobileAppBlock from '../components/MobileAppBlock';
import RestaurantsBlock from '../components/RestaurantsBlock';
import DishesBlock from '../components/DishesBlock';
import PurchasesBlock from '../components/PurchasesBlock';
import BannerBlock from '../components/BannerBlock';

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
