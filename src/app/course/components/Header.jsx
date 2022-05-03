import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='flex flow-row justify-between items-center m-5 sticky top-0 z-50'>
      <div>
        <IoIosArrowBack className='text-2xl' />
      </div>
      <div>
        <p className='font-medium text-2xl'>Curso</p>
      </div>
      <div>
        <BsBookmark className='text-2xl' />
      </div>
    </div>
  );
};

export default Header;
