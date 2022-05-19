import React from 'react';
import { TextLoop } from 'react-text-loop-next';

const Introduction = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
      <div className='flex text-3xl'>
        <p className='text-[#293241] font-bold'>Any</p>
        <TextLoop interval={2000} className='font-semibold text-[#EE6C4D]'>
          <p>Learn</p>
          <p>where</p>
          <p>one</p>
          <p>time</p>
        </TextLoop>
      </div>
      <p className='flex mx-6 my-5 text-center'>
      Empezar tu aventura académica nunca había sido tan sencillo. 
      Explora nuestro amplio catálogo de experiencias formativas ahora
      </p>
    </div>
  );
};

export default Introduction;
