import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center flex-row justify-between ml-3 mr-5 h-full -translate-y-5'>
      <IoIosArrowBack
        className='text-2xl fill-white'
        onClick={() => navigate('/')}
      />
      <BsGear className='text-3xl fill-white' />
    </div>
  );
};

export default Header;
