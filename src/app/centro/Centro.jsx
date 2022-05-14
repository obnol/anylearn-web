import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='flex items-center flex-row justify-end mr-5 h-full -translate-y-5'>
      <BsGear className='text-3xl fill-white' />
    </div>
  );
};

const Avatar = ({ avatar }) => {
  return (
    <div className='relative h-32 w-32'>
      <img
        className='absolute inset-x-full top-0 -translate-y-1/2 rounded-full'
        src={avatar}
        alt=''
      />
    </div>
  );
};

const Centro = () => {
  const navigate = useNavigate();

  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    if (!user || user.token !== 'fake-centro-token') {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='h-screen'>
      <div className='bg-anylearn-accent h-1/6'>
        <Header />
      </div>
      <div className='h-5/6'>
        <Avatar avatar={user?.avatar} />
        <div className='-translate-y-10 flex items-center justify-center'>
          <p className='text-2xl font-bold tracking-wide'>{user?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Centro;
