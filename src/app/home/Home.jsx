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
      {
        data.map((item,index) => {
          return(
          <PopularCategories key={index} list={item}/>
          );
        })
      }
    </>
  );
};

export default Home;
