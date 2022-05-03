import React from 'react';
import { TextLoop } from 'react-text-loop-next';

const Introduction = () => {
  return (
    <div className='flex justify-center items-center'>
      Any
      <TextLoop interval={1500}>
        <span>Learn</span>
        <span>where</span>
        <span>one</span>
        <span>time</span>
      </TextLoop>
    </div>
  );
};

export default Introduction;
