import { useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import PopularCategories from './components/PopularCategories';

import Categories from '../categories.json';
import Dummy from '../dummy.json';

const popularCategories = [
  {
    title: 'Economía',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Ciencias naturales',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Ingeniería',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Arte',
    image: 'https://picsum.photos/200',
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <p className='flex mx-5 mt-5 font-medium text-xl w-3/4'>
        Categorias populares en nuestra plataforma
      </p>
      <PopularCategories categories={popularCategories} />

      {Dummy.map((category, index) => (
        <>
          <Category key={index} category={category} />
        </>
      ))}
    </>
  );
};

export default Home;
