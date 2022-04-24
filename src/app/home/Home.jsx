import { Grid } from '@material-ui/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OfferCard from './components/OfferCard';

const Home = () => {
  const oferta =
  {
    image: "https://external-preview.redd.it/YT20RmPKJKCVhsPc7wQIr31C9FDDrTDfZjo6-Ph4Hdg.jpg?auto=webp&s=bc1afec3eb99603a6577f50803e80e7a76f801c5",
    title: "BASED",
    description: "la risa va por barrios",
  };
  return (
  <div className='flex flex-col justify-center items-center pt-24 text-2xl font-medium'>
      <OfferCard offer={oferta}/>
  </div>
  );
}

export default Home;
