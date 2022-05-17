import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../../store/auth';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillMail } from 'react-icons/ai';

const LogInCentro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(
      setUserData({
        email: 'anylearn@formaccio.net',
        name: 'Formacció',
        avatar: '/formaccio-logo.png',
        token: 'fake-centro-token',
      })
    );
    navigate('/centro');
  };

  return (
    <>
      <div className='items-center pt-10 mx-3'>
        <IoIosArrowBack className='text-2xl' onClick={() => navigate('/')} />
      </div>

      <div className='flex flex-col justify-center items-center pt-10 text-2xl font-medium'>
        <p>Bienvenido!</p>
        <p>Inicia sesión para continuar!</p>
      </div>

      <div className='flex flex-col justify-center items-center mx-5 pt-6'>
        <input
          type='email'
          className=' form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          placeholder='anylearn@upc.edu'
        />
        <input
          type='password'
          className=' form-input w-full mt-5 block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          placeholder='*************'
        />
      </div>
      <div
        className='h-14 bg-anylearn-blue-dark mt-16 mx-16 rounded-lg'
        onClick={handleLogin}
      >
        <div className='flex h-full justify-center items-center'>
          <p className='font-medium text-white'>Entrar</p>
        </div>
      </div>
      <p className='flex justify-center items-center pt-8 text-anylearn-contrast text-md text-center font-semibold'>
        Quieres colaborar con AnyLearn?
      </p>
      <p className='flex justify-center items-center pt-1 text-center'>
        <AiFillMail className='text-xl fill-anylearn-blue-dark' />
        <p className='ml-2 text-anylearn-accent font-bold text-md'>
          centro@anylearn.es
        </p>
      </p>
    </>
  );
};

export default LogInCentro;
