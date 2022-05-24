import React, { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { Link, useNavigate } from 'react-router-dom';
import { linkedinService } from '../../services/linkedin';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../store/auth';
import { IoIosArrowBack } from 'react-icons/io';
import { logIn } from '../../store/auth';

const fakeService = (code) => {
  return {
    email: 'longboqiu@gmail.com',
    name: 'Longbo',
    lastName: 'Qiu',
    avatar: 'https://picsum.photos/200',
    token: code,
  };
};

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector(({ auth }) => auth.loading);
  const loginSuccess = useSelector(({ auth }) => auth.loginSuccess);

  const { linkedInLogin } = useLinkedIn({
    clientId: '78skdzmjsq9y4b',
    redirectUri: `${window.location.origin}/linkedin`,
    scope: ['r_liteprofile', 'r_emailaddress'],
    onSuccess: (code) => {
      // linkedinService.login(code).then((res) => {
      //   console.log(res);
      //   localStorage.setItem('token', res);
      //   dispatch(setUserData(res));
      //   navigate('/');
      // });
      const response = fakeService(code);
      dispatch(setUserData(response));
      navigate('/');
    },
    onError: (error) => {},
  });

  const handleLogin = async () => {
    setEmail('');
    setPassword('');
    dispatch(logIn(email, password));
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSuccess]);

  return (
    <>
      <div className='items-center pt-10 mx-3'>
        <IoIosArrowBack className='text-2xl' onClick={() => navigate('/')} />
      </div>

      <div className='flex flex-col justify-center items-center pt-10 text-2xl font-medium'>
        <p>Bienvenido!</p>
        <p>Inicia sesión para continuar!</p>
      </div>

      <div
        className='h-14 bg-gray-200 mt-16 mx-5 rounded-lg'
        onClick={linkedInLogin}
      >
        <div className='flex h-full justify-center items-center'>
          <FaLinkedin className='text-2xl fill-[#0072b1]' />
          <p className='pl-2 font-medium'>Conéctate con LinkedIn</p>
        </div>
      </div>
      <p className='flex justify-center items-center py-5 text-slate-500'>or</p>

      <div className='flex flex-col justify-center items-center mx-5 pt-6'>
        <input
          type='email'
          className=' form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          placeholder='pae@anylearn.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className=' form-input w-full mt-5 block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          placeholder='*************'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        className='h-14 bg-anylearn-blue-dark mt-16 mx-16 rounded-lg'
        onClick={handleLogin}
      >
        <div className='flex h-full justify-center items-center'>
          {loading && (
            <svg
              class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                class='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
              ></circle>
              <path
                class='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          )}
          <p className='font-medium text-white'>Entrar</p>
        </div>
      </div>
      <p className='flex justify-center items-center pt-5 text-slate-500 text-xs text-center'>
        Nuevo en AnyLearn?
      </p>
      <p className='flex justify-center items-center pt-1 text-slate-500 text-xs text-center'>
        <Link to='/signup' className='text-anylearn-blue'>
          Crea una cuenta
        </Link>
      </p>
    </>
  );
};

export default LogIn;
