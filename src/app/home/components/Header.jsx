import React from 'react';
import logo from '../../../assets/anylearn-logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const logged = false;

  return (
    <>
      {logged ? (
        <div className='pt-14 px-6'>
          <div className='flex flex-row h-16 justify-between'>
            <div className='flex flex-col w-3/4'>
              <p className='font-medium text-2xl'>¡Hola, Longbo!</p>
              <p className='font-light text-slate-500'>
                ¿Qué te gustaría aprender?
              </p>
            </div>
            <div className='flex w-1/4'>
              <img
                className='h-full rounded-full'
                src='https://picsum.photos/200'
                alt=''
              />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-row justify-between mt-5 mx-5'>
          <div className='h-8'>
            <img className='h-full' src={logo} alt='' />
          </div>
          <div
            className='flex h-8 w-24 bg-blue-500  rounded-lg'
            onClick={() => navigate('/login')}
          >
            <div className='flex h-full w-full justify-center items-center'>
              <p className='font-medium text-sm text-white'>Log In</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
