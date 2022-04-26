import React from 'react';
import CourseInfo from './components/CourseInfo';
import Header from './components/Header';

const Course = () => {
  return (
    <>
      <Header />
      <div className='w-max h-52'>
        <img src='https://picsum.photos/390/208' alt='pic' className='h-full' />
      </div>
      <CourseInfo />
    </>
  );
};

export default Course;
