import React, { useState } from 'react';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className='flex text-3xl h-8 text-white z-50'
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
          width='30'
          height='32'
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
        <p className='mt-20 text-4xl font-semibold text-white'>
          I am a sidebar
        </p>
      </div>
    </>
  );
};

export default Sidebar;
