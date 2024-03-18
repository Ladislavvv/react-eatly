import React from 'react';
import { useParams } from 'react-router-dom';

import RestaurantBannerBlock from '../components/Blocks/RestaurantBannerBlock';

function RestaurantPage() {
  const { id } = useParams();
  return (
    <>
      <RestaurantBannerBlock id={Number(id)} />
    </>
  );
}

export default RestaurantPage;
