import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { useNavigate } from 'react-router-dom';
import { linkedinService } from '../../services/linkedin';
import { authService } from '../../services/auth';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);

  const handleSignUp = async () => {
    if (email && password && name && surname) {
      const response = await authService.signUp({
        email,
        password,
        name,
        surname,
      });
      console.log(response);
      navigate('/');
    }
  };

  const { linkedInLogin } = useLinkedIn({
    clientId: '78skdzmjsq9y4b',
    redirectUri: `${window.location.origin}/linkedin`,
    scope: ['r_liteprofile', 'r_emailaddress'],
    onSuccess: (code) => {
      linkedinService.login(code).then((res) => {
        console.log(res);
        localStorage.setItem('token', res);
      });
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      {!form ? (
        <>
          <div className='items-center pt-10 mx-3'>
            <IoIosArrowBack
              className='text-2xl'
              onClick={() => navigate('/login')}
            />
          </div>
          <div className='flex flex-col justify-center items-center pt-10 text-2xl font-medium'>
            <p>Bienvenido!</p>
            <p>Regístrate para continuar!</p>
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
          <p className='flex justify-center items-center py-5 text-slate-500'>
            or
          </p>

          <div
            className='h-14 bg-gray-200  mx-5 rounded-lg'
            onClick={() => setForm(true)}
          >
            <div className='flex h-full justify-center items-center'>
              <AiFillMail className='text-2xl' />
              <p className='pl-2 font-medium'>
                Regístrate con correo electrónico
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='items-center pt-10 mx-3'>
            <IoIosArrowBack
              className='text-2xl'
              onClick={() => setForm(false)}
            />
          </div>
          <div className='flex items-center pt-5 text-2xl mx-5 font-medium'>
            <p>Introduce tus datos</p>
          </div>
          <div className='flex flex-col mx-5 pt-8'>
            <input
              type='text'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='nombre'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='apellido'
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type='email'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='correo electrónico'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='*********'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type='password'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='confirmar contraseña'
            />
          </div>
          <div
            className='h-14 bg-blue-500 mt-16 mx-16 rounded-lg'
            onClick={handleSignUp}
          >
            <div className='flex h-full justify-center items-center'>
              {/* <svg
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
              </svg> */}
              <p className='pl-2 font-medium text-white'>Registrarte</p>
            </div>
          </div>
        </>
      )}

      <p className='flex justify-center items-center pt-5 mx-20 text-slate-500 text-xs text-center'>
        Al registrarte, aceptas nuestras condiciones.
      </p>
    </>
  );
};

export default Signup;
