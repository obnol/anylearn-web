import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../../../store/auth';

const areas = [
  {
    name: 'Idiomas',
    value: 'idiomas',
  },
  {
    name: 'Habilidades Personales',
    value: 'habilidades-personales',
    examples: [
      'Psicología',
      'Comunicación',
      'Liderazgo',
      'Inteligencia Emocional',
    ],
  },
  {
    name: 'Tecnología',
    value: 'tecnologia',
    examples: [
      'Inteligencia Artificial',
      'Ciberseguridad',
      'Blockchain',
      'Programación',
    ],
  },
  {
    name: 'Administración de Empresas',
    value: 'administracion-empresas',
    examples: ['Marketing', 'Finanzas', 'Gestión de Proyectos'],
  },
  {
    name: 'Sostenibilidad y Medio Ambiente',
    value: 'sostenibilidad',
  },
  {
    name: 'Historia y Antropología',
    value: 'historia-antropologia',
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
        className='flex w-full h-10 justify-center items-center rounded-lg border-[#EE6C4D] border-2'
        onClick={() => {
          dispatch(setLogout());
          setShowSidebar(false);
        }}
      >
        <div className='flex h-full w-full justify-center items-center'>
          <p className='font-medium text-sm text-white'>Cerrar Sesión</p>
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
        className={`top-0 left-0 w-screen bg-[#3D5A80] p-10 text-white fixed h-full z-40 ease-in-out duration-200 ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full'
        }`}
      >
        {user && (
          <div className='flex flex-row justify-between items-center mt-7 h-20'>
            <p className='text-2xl font-bold'>
              ¡Hola, <span className='text-[#EE6C4D]'>{user.name}</span>!
            </p>
            <img
              className='h-full rounded-full'
              src={user.profilePicture}
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
                onClick={() => navigate(`/search?${area.value}`)}
              >
                <p className='font-semibold'>{area.name}</p>
                <IoIosArrowForward className='text-xl fill-[#EE6C4D]' />
              </section>
              {area?.examples && (
                <div className='ml-5'>
                  {area.examples.map((example) => (
                    <p className='font-light text-md'>{example}</p>
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
