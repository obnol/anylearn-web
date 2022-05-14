import React from 'react';
import CourseInfo from './components/CourseInfo';
import Header from './components/Header';

const Course = () => {
  return (
    <>
      <Header />
      <div className='w-full h-52 place-items-end'>
        <img src='https://picsum.photos/390/208' alt='pic' className='h-full' />
      </div>
      <CourseInfo />
    </>
  );
};

export default Course;
