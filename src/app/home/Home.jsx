import { useEffect } from 'react';
import Header from './components/Header';
import { Category } from './components/Category';
import PopularCategories from './components/PopularCategories';
import { getUserData } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import Introduction from './components/Introduction';
import { useNavigate } from 'react-router-dom';

import Dummy from '../dummy.json';

const popularCategories = [
  {
    title: 'Economía',
    id: 5,
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Ciencias naturales',
    id: 5,
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Ingeniería',
    id: 5,
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Arte',
    id: 5,
    image: 'https://picsum.photos/200',
  },
];

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    const token = localStorage.getItem('anylearn-token');

    if (token === 'fake-centro-token') {
      navigate('/centro');
    }

    if (token && !user) {
      dispatch(getUserData(token));
    }
    // eslint-disable-next-line
  }, []);

  const LogInButtonUser = () => {
    const navigate = useNavigate();
    return (
      <div
        className='flex h-10 bg-[#3D5A80]  rounded-lg my-3'
        onClick={() => navigate('/login')}
      >
        <div className='flex h-full w-full justify-center items-center'>
          <p className='font-medium text-sm text-white'>
            Inicia sesión como usuario
          </p>
        </div>
      </div>
    );
  };

  const LogInButtonClient = () => {
    const navigate = useNavigate();
    return (
      <div
        className='flex h-10 bg-white  rounded-lg my-3 border-solid border-anylearn-blue-dark border'
        onClick={() => navigate('/login-centro')}
      >
        <div className='flex h-full w-full justify-center items-center'>
          <p className='font-medium text-sm text-anylearn-blue-dark'>
            Inicia sesión como centro formativo
          </p>
        </div>
      </div>
    );
  };

  return (
    // <Animated>
    <>
      <Header />
      <Introduction />
      {!user && (
        <div className='flex flex-col mx-14'>
          <LogInButtonUser />
          <LogInButtonClient />
        </div>
      )}
      <PopularCategories categories={popularCategories} />
      {Dummy.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </>
    // </Animated>
  );
};

export default Home;
