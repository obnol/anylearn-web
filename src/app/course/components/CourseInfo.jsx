import React from 'react';
import { BsCalendarRange } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { MdLocationCity } from 'react-icons/md';

const CourseInfo = () => {
  return (
    <div className='flex flex-col m-5'>
      <div className='flex flex-row h-10 items-center'>
        <img
          src='https://picsum.photos/256'
          className='h-full rounded-full mr-5'
        />
        <div>
          <p className='font-medium'>Universitat Politècnica de Catalunya</p>
          <p className='font-light'>Facultad de Informática de Barcelona</p>
        </div>
      </div>
      <p className='font-semibold text-2xl mt-5'>
        Grado de ingenieria informática
      </p>
      <div className='flex flex-col mt-4 items-center text-slate-500'>
        <div className='flex flex-row w-full'>
          <MdLocationCity className='text-xl' />
          <span>Barcelona, España</span>
        </div>
        <div className='flex flex-row space-x-16 mt-2'>
          <div className='flex flex-row space-x-3'>
            <BsCalendarRange className='text-xl' />
            <span>6 meses</span>
          </div>
          <div className='flex flex-row space-x-3'>
            <GoLocation className='text-xl' />
            <span>A 245 Km</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
