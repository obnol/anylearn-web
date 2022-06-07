import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const navigate = useNavigate();
  var isRandom;
  if (item.id > 4)
  {
    isRandom = true;
  }
  return (
    <div
      className='flex flex-col shrink-0 w-44'
      onClick={() => navigate('/course/1')}
    >
      {
    isRandom ? (
      <img className='h-4/6 rounded-md' src={`https://picsum.photos/id/${Math.floor((Math.random()*40)+1000)}/200/200`} alt='' />
    ) : (
      <img className='h-4/6 rounded-md' src={item.image} alt='' />
    )
    }
      <p className='h-2/6 text-base font-light'>{item.title}</p>
    </div>
  );
};

const Category = ({ category }) => {
  return (
    <div className='flex flex-col mx-5 mt-5 h-auto'>
      <div className='flex flex-row justify-between mb-1'>
        <p className='font-medium text-xl'>{category.type}</p>
        <p className='text-sm font-light'>ver más</p>
      </div>
      <div className='flex flex-row  overflow-x-auto space-x-8'>
        {category.courses.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export { Category, Item };
