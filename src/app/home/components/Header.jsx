import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiSearch } from 'react-icons/fi';

const SearchButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className='flex rounded-lg h-6 w-8'
      onClick={() => navigate('/search')}
    >
      <div className='flex w-full h-full justify-center items-center'>
        <FiSearch className='text-[#3D5A80] text-xl' />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className='flex flex-col sticky top-0 z-50 bg-white'>
      <div className='flex flex-row justify-between items-center m-4'>
        <Sidebar />
        <div className='h-7'>
          <img className='h-full' src='/logo-svg-color-small.png' alt='logo' />
        </div>
        <SearchButton />
      </div>
      <div className='h-px bg-[#3D5A80]'></div>
    </header>
  );
};

export default Header;
