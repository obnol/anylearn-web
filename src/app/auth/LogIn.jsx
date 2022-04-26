import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth';
import { linkedinService } from '../../services/linkedin';

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const { linkedInLogin } = useLinkedIn({
    clientId: '78skdzmjsq9y4b',
    redirectUri: `${window.location.origin}/linkedin`,
    scope: ['r_liteprofile', 'r_emailaddress'],
    onSuccess: (code) => {
      console.log('CODE', code);
      // send request to backend

      // const { access_token } = response.data;
      // console.log(access_token);
      // const { data: user } = await linkedinService.getUser(access_token);
      // const { email, firstName, lastName } = user;
      // const { data: token } = await authService.login({ email, password });
      // localStorage.setItem('token', token);
      // localStorage.setItem('user', JSON.stringify({ email, firstName, lastName }));
      navigate('/');
    },
    onError: (error) => {},
  });

  const handleLogin = async () => {
    const response = await authService.logIn(email, password);
    if (response.status === 200) {
      setEmail(null);
      setPassword(null);
      navigate('/');
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center pt-24 text-2xl font-medium'>
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
        className='h-14 bg-blue-500 mt-16 mx-16 rounded-lg'
        onClick={handleLogin}
      >
        <div className='flex h-full justify-center items-center'>
          <p className='pl-2 font-medium text-white'>Entrar</p>
        </div>
      </div>
      <p className='flex justify-center items-center pt-5 text-slate-500 text-xs text-center'>
        Nuevo en AnyLearn?
      </p>
      <p className='flex justify-center items-center pt-1 text-slate-500 text-xs text-center'>
        <Link to='/signup' className='text-blue-500'>
          Crea una cuenta.
        </Link>
      </p>
    </>
  );
};

export default LogIn;
