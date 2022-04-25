import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PopularCategories from './components/PopularCategories';
import { useState } from 'react';
const Home = () => {
  var data = require("../../testitems.json");
  return (
    <>
      <Header />
      <SearchBar />
      <PopularCategories/>
    </>
  );
};

export default Home;
