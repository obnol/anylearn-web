import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='flex flex-col shrink-0 w-44'>
      <img className='h-4/6 rounded-md' src={item.image} alt='image' />
      <p className='h-2/6 text-base font-light'>{item.title}</p>
    </div>
  );
};

const Category = ({ category }) => {
  return (
    <div className='flex flex-col mx-5 mt-5 h-auto'>
      <div className='flex flex-row justify-between'>
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

export default Category;
