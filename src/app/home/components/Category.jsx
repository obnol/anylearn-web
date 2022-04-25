import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='flex flex-col flex-shrink-0'>
      <img className='h-full' src={item.image} alt='' />
      <p className='text-base font-light'>{item.title}</p>
    </div>
  );
};

const Category = ({ category }) => {
  return (
    <div className='flex flex-col mx-5 mt-5'>
      <p className='text-base font-medium'>{category.type}</p>
      <div className='flex flex-row h-40 overflow-x-auto space-x-8'>
        {category.courses.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
