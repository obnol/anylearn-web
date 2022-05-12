import React from 'react';
import CourseInfo from './components/CourseInfo';
import Header from './components/Header';
import { AiOutlineForm } from "react-icons/ai";

const Course = () => {
  return (
    <div>
      <Header />
      <div className='w-max h-52 place-items-end'>
        <img src='https://picsum.photos/390/208' alt='pic' className='h-full' />
      </div>
      <CourseInfo />
    </div>
  );
};

export default Course;