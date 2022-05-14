import React from 'react';
import { MdLocationCity } from 'react-icons/md';

const Accomodation = (props) => {
  const { img, name, price, valoration, location, description } = props;

  const ValorationRow = ({ points, quality, comments }) => {
    return (
      <div className='flex flex-row mt-1'>
        <div className='h-6 w-7 bg-[#23387E] rounded-t-md rounded-br-md'>
          <p className='text-white text-center'>{points}</p>
        </div>
        <p className='ml-2 text-sm font-light'>{`${quality} · ${comments} comentarios`}</p>
      </div>
    );
  };

  const LocationRow = () => {
    return (
      <div className='flex flex-row items-center mt-2'>
        <MdLocationCity className='text-xl' />
        <p className='ml-2 text-sm font-light'>{location}</p>
      </div>
    );
  };

  const DescriptionRow = () => {
    return <p className='font-light text-sm text-right'>{description}</p>;
  };

  const PriceRow = ({ amount, period }) => {
    return (
      <div className='flex justify-end mt-3'>
        <p className='line-through font-light'>{`${amount}€`}</p>
        <p className='ml-3 font-bold text-lg text-anylearn-accent'>{`${
          amount * 0.9
        }€/${period}`}</p>
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
          <LocationRow />
          <DescriptionRow />
          <PriceRow {...price} />
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
