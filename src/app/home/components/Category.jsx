import React from 'react';
import PostCard from './PostCard';
import { View } from 'react';

const Category = ({ category }) => {
  return (
    <div>
      <div className='flex'>
        <p className='font-normal text-xl w-3/4'>{category.type}</p>
        <p className='font-light text-sm text-gray-500'>ver más</p>
      </div>
      <div className='flex flex-row h-36 mt-4 justify-between overflow-x-scroll'>
        {category.cards.map((card, index) => {
          return <PostCard key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Category;
