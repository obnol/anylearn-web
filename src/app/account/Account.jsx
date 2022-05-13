import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Avatar from './components/Avatar';
import Curso from './components/Curso';
import { BsBookmark } from 'react-icons/bs';

const courses = [
  {
    title: 'Blockchain',
    university: 'Universitat Politècnica Catalunya',
    country: 'España',
    distance: '2km',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Desarrollo web',
    university: 'Universitat Politècnica Catalunya',
    country: 'España',
    distance: '2km',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Big Data',
    university: 'Universitat Politècnica Catalunya',
    country: 'España',
    distance: '2km',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Diseño Interior',
    university: 'Universitat Politècnica Catalunya',
    country: 'España',
    distance: '2km',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Alemán',
    university: 'Universitat Pompeu Fabra Catalunya',
    country: 'España',
    distance: '2km',
    image: 'https://picsum.photos/200',
  },
];

const Account = () => {
  const navigate = useNavigate();

  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='h-screen'>
      <div className='bg-[#3D5A80] h-1/6'>
        <Header />
      </div>
      <div className='h-5/6'>
        <Avatar avatar={user?.avatar} />
        <div className='-translate-y-10 flex items-center justify-center'>
          <p className='text-2xl font-bold tracking-wide'>{user?.name}</p>
        </div>
        <div className='mx-5'>
          <div className='flex flex-row items-center'>
            <BsBookmark className='mr-1 text-xl fill-anylearn-accent' />
            <p className='text-xl font-bold tracking-wide'>Cursos favoritos</p>
          </div>
          {courses.map((course) => (
            <Curso key={course.title} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
