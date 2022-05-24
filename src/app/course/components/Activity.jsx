import React from 'react';

const Activity = (props) => {
  const { img, name, price, valoration, location, description } = props;

  const ValorationRow = ({ points, quality, comments }) => {
    return (
      <div className='flex flex-row mt-1'>
        <div className='h-6 w-7 bg-[#22d122] rounded-t-md rounded-br-md'>
          <p className='text-white text-center'>{points}</p>
        </div>
        <p className='ml-2 text-sm font-light'>{`${quality} · ${comments} comentarios`}</p>
      </div>
    );
  };

  return (
    <div className='flex flex-row my-2 h-40'>
      <div className='flex w-1/3'>
        <img
          src={img}
          alt='accomodation'
          className='h-full w-full rounded-md'
        />
      </div>
      <div className='ml-2 flex-1'>
        <div className='flex flex-col'>
          <p className='font-semibold'>{name}</p>
          <ValorationRow {...valoration} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
