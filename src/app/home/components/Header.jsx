import React from 'react';

const Header = () => {
  return (
    <div className='pt-14 px-6'>
      <div className='flex flex-row h-16 justify-between'>
        <div className='flex flex-col w-3/4'>
          <p className='font-medium text-2xl'>¡Hola, Longbo!</p>
          <p className='font-light text-slate-500'>
            ¿Qué te gustaría aprender?
          </p>
        </div>
        <div className='flex w-1/4'>
          <img
            className='h-full rounded-full'
            src='https://picsum.photos/200'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
