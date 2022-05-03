import React from 'react';
import { TextLoop } from 'react-text-loop-next';

const Introduction = () => {
  return (
    <div className='flex justify-center items-center text-3xl'>
      <p className='text-[#293241] font-bold'>Any</p>
      <TextLoop interval={1500} className='font-semibold text-[#EE6C4D]'>
        <p>Learn</p>
        <p>where</p>
        <p>one</p>
        <p>time</p>
      </TextLoop>
    </div>
  );
};

export default Introduction;
