import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const Curso = ({ course }) => {
  return (
    <div className='flex flex-row w-full my-3'>
      <div className='flex w-1/4 mr-3'>
        <img src={course.image} alt='Curso' className='h-full rounded-md' />
      </div>
      <div className='flex-1 flex-col'>
        <p className='text-lg font-semibold'>{course.title}</p>
        <div className='flex flex-row w-full items-center'>
          <FaUniversity className='text-md fill-slate-400 mr-1' />
          <p className='text-sm'>{course.university}</p>
        </div>
        <div className='flex flex-row'>
          <p className='text-sm'>{course.country}</p>
          <p className='text-sm ml-2'>{course.distance}</p>
        </div>
      </div>
    </div>
  );
};

export default Curso;
