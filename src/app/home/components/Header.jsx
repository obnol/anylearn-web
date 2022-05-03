import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../../store/auth';
import Sidebar from './Sidebar';
import { FiSearch } from 'react-icons/fi';

const LogInButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className='flex h-7 bg-blue-500  rounded-lg'
      onClick={() => navigate('/login')}
    >
      <div className='flex h-full w-full justify-center items-center'>
        <p className='font-medium text-sm text-white'>Log In</p>
      </div>
    </div>
  );
};

const LogOutButton = () => {
  const dispatch = useDispatch();
  return (
    <div
      className='flex h-7 bg-white rounded-lg border-blue-500 border-2'
      onClick={() => dispatch(setLogout())}
    >
      <div className='flex h-full w-full justify-center items-center'>
        <p className='font-medium text-sm text-blue-500'>Log Out</p>
      </div>
    </div>
  );
};

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
  const user = useSelector(({ auth }) => auth.user);

  return (
    <>
      <div className='flex flex-row justify-between items-center m-5'>
        <Sidebar />
        <img className='h-7' src='/anylearn-logo2.png' alt='' />
        <SearchButton />
      </div>
      {user && (
        <div className='px-5 pt-5'>
          <div className='flex flex-row h-16 justify-between'>
            <div className='flex flex-col w-3/4'>
              <p className='font-medium text-2xl'>{`¡Hola, ${user.name}!`}</p>
              <p className='font-light text-slate-500'>
                ¿Qué te gustaría aprender?
              </p>
            </div>
            <div className='flex w-1/4'>
              <img
                className='h-full w-auto rounded-full'
                src={user.profilePicture}
                alt=''
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
