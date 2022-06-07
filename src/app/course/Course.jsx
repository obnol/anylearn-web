import React, { useEffect } from 'react';
import CourseInfo from './components/CourseInfo';
import Header from './components/Header';
import { useParams } from 'react-router-dom';

const Course = () => {
  const { courseId } = useParams();

  useEffect(() => {
    // get course info from API call

    
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className='w-full h-60 place-items-end'>
        <img src='https://img2.storyblok.com/1164x655/filters:quality(75):focal(582x328:583x329):format(webp)/f/58806/1164x655/c584866a31/london_campusinterior_02_classroom_ef.jpg' alt='pic' className='h-full' />
      </div>
      <CourseInfo />
    </>
  );
};

export default Course;
