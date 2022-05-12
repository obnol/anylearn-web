import React from 'react';

const Avatar = ({ avatar }) => {
  return (
    <div className='relative h-32 w-32'>
      <img
        className='absolute inset-x-full top-0 -translate-y-1/2 rounded-full'
        src={avatar}
        alt=''
      />
    </div>
  );
};

export default Avatar;
