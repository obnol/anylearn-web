import { Card, Grid, Paper } from '@material-ui/core';
import React from 'react';
import PostCard from './PostCard'
import { FlatList } from 'react';
const PopularCategories = ({ list }) => {
  console.log(list);
  const type = list.type;
  const cards = list.cards;
  return (
    <div className='mt-5 mx-5'>
      <div className='flex flex-row justify-between'>
        <p className='font-medium text-xl w-3/4'>
          Categorias populares en nuestra plataforma
        </p>
        <p className='font-light text-sm text-gray-500'>ver más</p>
      </div>
      <div className='flex flex-row h-36 mt-4 justify-between'>
        <Grid container spacing={5}>       
          {cards.map((card, index) => {
            return (
              <PostCard key={index} card={card}/>
            );
          })}
        </Grid>
        <div class='relative overflow-hidden'>
          <img
            src='https://picsum.photos/200'
            class='object-cover w-full h-full rounded-md'
          />
          <div class='absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-base text-center'>
            Diseño Interior
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
