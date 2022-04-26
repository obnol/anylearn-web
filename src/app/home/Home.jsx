import { useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';

import Dummy from '../dummy.json';

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <p className='flex mx-5 mt-5 font-medium text-xl w-3/4'>
        Categorias populares en nuestra plataforma
      </p>
      {Dummy.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </>
  );
};

export default Home;
