import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsGear } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { IoMdPhotos } from 'react-icons/io';
import Curso from '../commons/Curso';
import { logout } from '../../store/auth';
import { useDispatch } from 'react-redux';

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

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center flex-row justify-end mr-5 h-full -translate-y-5'>
      <BsGear
        className='text-3xl fill-white'
        onClick={() => dispatch(logout())}
      />
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
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    if (!user || user.token !== 'fake-centro-token') {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [user]);

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
        <div className='flex flex-row justify-between items-center mx-5'>
          <p className='font-bold text-2xl'>Cursos</p>
          <div
            className='flex items-center justify-center w-28 h-10 border-2 rounded-md border-anylearn-blue font-semibold'
            onClick={() => setShowModal(true)}
          >
            <p>Añadir curso</p>
          </div>
        </div>
        <div className='flex flex-col mx-5'>
          {courses.map((course) => (
            <div className='flex flex-row items-center'>
              <Curso key={course.title} course={course} />
              <FiEdit className='text-xl ml-2' />
            </div>
          ))}
        </div>
      </div>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative my-6 mx-5 w-full'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-2xl font-semibold'>Añadir nuevo curso</h3>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto w-full'>
                  <input
                    type='text'
                    className='mt-1 block w-full my-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    placeholder='Nombre'
                  />
                  <input
                    type='text'
                    className='mt-1 block w-full my-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    placeholder='Descripción'
                  />
                  <input
                    type='text'
                    className='mt-1 block w-full my-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    placeholder='Duración'
                  />
                  <input
                    type='text'
                    className='mt-1 block w-full my-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    placeholder='Categorias'
                  />
                  <div className='w-full flex items-center justify-center'>
                    <IoMdPhotos className='text-3xl' />
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className='bg-emerald-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  );
};

export default Centro;
