import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import PopularCategories from './components/PopularCategories';
import { getUserData } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authService } from '../../services/auth';
import Sidebar from './components/Sidebar';

import Categories from '../categories.json';
import Dummy from '../dummy.json';

const popularCategories = [
  {
    title: 'Economía',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Ciencias naturales',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Ingeniería',
    image: 'https://picsum.photos/200',
  },
  {
    title: 'Arte',
    image: 'https://picsum.photos/200',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('anylearn-token');
    if (token && !user) {
      const response = authService.getUserData(token);
      dispatch(getUserData(response));
    }
  }, []);

  return (
    <>
      <Header />
      {/* <SearchBar /> */}
      <PopularCategories categories={popularCategories} />

      {Dummy.map((category, index) => (
        <>
          <Category key={index} category={category} />
        </>
      ))}
    </>
  );
};

export default Home;
