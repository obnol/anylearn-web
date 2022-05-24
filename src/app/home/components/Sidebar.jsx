import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../store/auth';

const areas = [
  {
    name: 'Idiomas',
    value: '512',
  },
  {
    name: 'Habilidades Personales',
    value: '256',
    examples: [
      'Psicología',
      'Comunicación',
      'Liderazgo',
      'Inteligencia Emocional',
    ],
  },
  {
    name: 'Tecnología',
    value: '128',
    examples: [
      'Inteligencia Artificial',
      'Ciberseguridad',
      'Blockchain',
      'Programación',
    ],
  },
  {
    name: 'Administración de Empresas',
    value: '1',
    examples: ['Marketing', 'Finanzas', 'Gestión de Proyectos'],
  },
  {
    name: 'Sostenibilidad y Medio Ambiente',
    value: '32',
  },
  {
    name: 'Historia y Antropología',
    value: '64',
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(({ auth }) => auth.user);

  const [showSidebar, setShowSidebar] = useState(false);

  const LogOutButton = () => {
    return (
      <div
        className='flex w-full h-10 justify-center items-center rounded-lg'
        onClick={() => {
          dispatch(logout());
          setShowSidebar(false);
        }}
      >
        <div className='flex h-full w-full justify-center items-center'>
          <p className='font-bold text-md text-anylearn-accent'>
            Cerrar Sesión
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      {showSidebar ? (
        <button
          className='text-3xl h-7 w-7 text-white z-50'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className='z-30 flex'
          fill='#3D5A80'
          viewBox='0 0 100 80'
          width='28'
          height='28'
        >
          <rect width='100' height='10'></rect>
          <rect y='30' width='100' height='10'></rect>
          <rect y='60' width='100' height='10'></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-screen bg-[#3D5A80] p-10 text-white fixed  h-screen overscroll-none z-40 ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full '
        }`}
      >
        {user && (
          <div className='flex flex-row justify-between items-center mt-7 h-20'>
            <p className='text-2xl font-bold'>
              ¡Hola, <span className='text-[#EE6C4D]'>{user.name}</span>!
            </p>
            <img
              className='h-full rounded-full'
              src={user.avatar}
              alt='profile'
              onClick={() => navigate('/account')}
            />
          </div>
        )}
        <div className='flex flex-col mt-6'>
          <p className='text-xl font-bold mb-3 underline'>Áreas</p>
          {areas.map((area) => (
            <div className='flex flex-col my-1'>
              <section
                className='flex flex-row justify-between items-center'
                onClick={() => navigate(`/search?distance=0&duration=0&categories=${area.value}`)}
              >
                <p className='font-semibold'>{area.name}</p>
                <IoIosArrowForward className='text-xl fill-[#EE6C4D]' />
              </section>
              {area?.examples && (
                <div className='ml-5'>
                  {area.examples.map((example) => (
                    <p className='font-light text-sm'>{example}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex mx-16 mt-8'>{user && <LogOutButton />}</div>
      </div>
    </>
  );
};

export default Sidebar;
