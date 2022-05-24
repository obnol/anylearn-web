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
      <div className='w-full h-52 place-items-end'>
        <img src='https://picsum.photos/390/208' alt='pic' className='h-full' />
      </div>
      <CourseInfo />
    </>
  );
};

export default Course;
