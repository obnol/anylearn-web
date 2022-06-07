import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flow-row justify-between items-center p-5 h-16 sticky top-0 z-50 bg-white border-b-anylearn-blue-dark border-2'>
            <div>
                <IoIosArrowBack className='text-2xl' onClick={() => navigate(-1)} />
            </div>
            <div className='h-7'>
                <img className='h-full' src='/logo-svg-color-small.png' alt='logo' />
            </div>
        </div>
    );
};

export default Header;
