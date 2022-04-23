import React, { useState } from 'react';
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { useLinkedIn } from 'react-linkedin-login-oauth2';

const LogIn = () => {
  const [form, setForm] = useState(false);

  const handleSignUpPhone = () => {
    alert('mobile');
  };

  const { linkedInLogin } = useLinkedIn({
    clientId: '78skdzmjsq9y4b',
    redirectUri: `${window.location.origin}/linkedin`,
    scope: ['r_liteprofile', 'r_emailaddress'],
    onSuccess: (code) => {
      console.log(code);
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
              <FaPhoneAlt className='text-2xl' />
              <p className='pl-2 font-medium'>Sign up with your phone number</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex justify-center items-center pt-24 text-2xl font-medium'>
            <p>Enter your details</p>
          </div>
          <div className='flex flex-col justify-center items-center mx-16 pt-10'>
            <p>Phone number</p>
            <input
              type='tel'
              className='text-center form-input w-full block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              placeholder='123456789'
            />
          </div>
          <div
            className='h-14 bg-blue-500 mt-16 mx-16 rounded-lg'
            onClick={console.log('hola')}
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

export default LogIn;
