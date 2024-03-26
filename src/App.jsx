import React from 'react';
import axios from 'axios';
import './scss/App.scss';

import Header from './components/Blocks/Header';
import Footer from './components/Blocks/Footer';
import { Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Menu from './pages/Menu';
import Pricing from './pages/Pricing';
import RestaurantPage from './pages/RestaurantPage';
import AllDishes from './pages/AllDishes';

export const RestaurantsList = React.createContext();
export const DishesList = React.createContext();

function App() {
  const [items, SetItems] = React.useState([])

  const fetchRestaurants = () => {
    axios.get(`https://65cd2149dd519126b8402996.mockapi.io/restaurants`).then(res => {
      SetItems(res.data);
    }).catch(error => {
      console.log('There has been a problem with your axios get operation:', error);
    })
  }

  React.useEffect(() => {
    window.scrollTo(0,0);
    fetchRestaurants();
  }, [])

  // console.log(items)

  const restaurants = [
    {
      id: 0,
      title: 'The Chicken King',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Healthy',
      timeToCook: 24,
      rating: 4.5,
    },
    {
      id: 1,
      title: 'The Burger King',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Trending',
      timeToCook: 26,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'The Chicken King',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Supreme',
      timeToCook: 27,
      rating: 5.0,
    },
    {
      id: 3,
      title: 'Chicken Hell',
      img: {
        url: '/img/restaurant-image1.png',
        alt: 'chiken',
      },
      highlight: 'Healthy',
      timeToCook: 24,
      rating: 4.5,
    },
  ];

  const dishes = [
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Supreme',
      timeToCook: 24,
      rating: 4.5,
      price: 19.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Trending',
      timeToCook: 28,
      rating: 4.8,
      price: 4.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Supreme',
      timeToCook: 15,
      rating: 4.5,
      price: 6.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Trending',
      timeToCook: 32,
      rating: 3.4,
      price: 7.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Healthy',
      timeToCook: 25,
      rating: 5.0,
      price: 48.99,
    },
    {
      title: 'Chicken Hell',
      imgUrl: '/img/food-image.png',
      imgAlt: 'Chiken salad',
      highlight: 'Supreme',
      timeToCook: 30,
      rating: 4.8,
      price: 15.99,
    },
  ];

  return (
    <RestaurantsList.Provider value={items}>
      <DishesList.Provider value={dishes}>
        <div className="App">
          <div className="wrapper">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/restaurant/:id" element={<RestaurantPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/alldishes' element={<AllDishes/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </DishesList.Provider>
    </RestaurantsList.Provider>
  );
}

export default App;
