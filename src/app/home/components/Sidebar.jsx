import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector(({ auth }) => auth.user);

  const [showSidebar, setShowSidebar] = useState(false);

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
          <div className='flex flex-row justify-between items-center mt-10 h-20'>
            <p className='text-2xl font-bold'>¡Hola, {user.name}!</p>
            <img
              className='h-full rounded-full'
              src={user.profilePicture}
              alt=''
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
