import { Card, Grid, Paper } from '@material-ui/core';
import React from 'react';
import PostCard from './PostCard'
import Category from './Category';
import { FlatList } from 'react';
const PopularCategories = () => {
  var data = require("../../../testitems.json");
  return (
    <div className='mt-5 mx-5 flex-row'>
      <div className='flex flex-row justify-between'>
        <p className='font-medium text-xl w-3/4'>
          Categorias populares en nuestra plataforma
        </p>
      </div>
      <div className='flex flex-row h-36 justify-between'>
        <div container>
          {data.map((category,index) => {
            console.log(category);
            return (
              <Category key={index} category={category}/>
            );
          })}
        </div>
        {/* <div class='relative overflow-hidden'>
          <img
            src='https://picsum.photos/200'
            class='object-cover w-full h-full rounded-md'
          />
          <div class='absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-base text-center'>
            Diseño Interior
          </div>
        </div>*/}        
      </div>
    </div>
  );
};

export default PopularCategories;
