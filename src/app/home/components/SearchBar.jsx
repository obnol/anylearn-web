import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center h-14 bg-[#FFF1F3] mx-5 rounded-lg mt-5'>
      <input
        type='text'
        className='bg-[#FFF1F3] w-full px-5 border-0 focus:ring-0'
        placeholder='Economia'
      />
      <FiSearch className='mr-5 text-xl' />
    </div>
  );
};

export default SearchBar;
