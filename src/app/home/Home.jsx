import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PopularCategories from './components/PopularCategories';

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <PopularCategories />
    </>
  );
};

export default Home;
