import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleSignUp = () => {
    if (email && password && name && lastName) {
      navigate('/');
    }
  };

  const { linkedInLogin } = useLinkedIn({
    clientId: '78skdzmjsq9y4b',
    redirectUri: `${window.location.origin}/linkedin`,
    scope: ['r_liteprofile', 'r_emailaddress'],
    onSuccess: (code) => {
      console.log(code);
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
          <div className='flex flex-col justify-center items-center pt-24 text-2xl font-medium'>
            <p>Welcome!</p>
            <p>Sign up to continue!</p>
          </div>

          <div
            className='h-14 bg-gray-200 mt-16 mx-5 rounded-lg'
            onClick={linkedInLogin}
          >
            <div className='flex h-full justify-center items-center'>
              <FaLinkedin className='text-2xl fill-[#0072b1]' />
              <p className='pl-2 font-medium'>Sign up with LinkedIn</p>
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
              <p className='pl-2 font-medium'>Sign up with email</p>
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
            <p>Enter your details</p>
          </div>
          <div className='flex flex-col mx-5 pt-8'>
            <input
              type='text'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='name'
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='last name'
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type='email'
              className='form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='email address'
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
              placeholder='confirm password'
            />
          </div>
          <div
            className='h-14 bg-blue-500 mt-16 mx-16 rounded-lg'
            onClick={handleSignUp}
          >
            <div className='flex h-full justify-center items-center '>
              <p className='pl-2 font-medium text-white'>Sign up</p>
            </div>
          </div>
        </>
      )}

      <p className='flex justify-center items-center pt-5 mx-20 text-slate-500 text-xs text-center'>
        By signing up you are agreed with our friendly terms and condition.
      </p>
    </>
  );
};

export default Signup;
