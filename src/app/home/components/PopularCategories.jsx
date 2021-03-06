import React from 'react';

const Item = ({ item }) => {
  var isRandom;
  if (item.id > 4)
  {
    isRandom = true;
  }
  else isRandom = false;
  return (
    <div className='flex flex-col shrink-0 w-44'>
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

const PopularCategories = ({ categories }) => {
  return (
    <>
      <div className='flex flex-row justify-between mx-5 mt-5'>
        <p className='flex font-medium w-3/4 text-xl'>
          Categorias populares en nuestra plataforma
        </p>
        <p className='text-sm font-light'>ver más</p>
      </div>
      <div className='flex flex-col mx-5 mt-5 h-auto'>
        <div className='flex flex-row overflow-x-auto space-x-8'>
          {categories.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;
