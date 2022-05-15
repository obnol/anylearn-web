import axios from 'axios';

const API = '';

const logIn = async (email, password) => {
  // return axios.post(`${API}/login`, {
  //   email,
  //   password,
  // });
  return { status: 200 };
};

const getUserData = (token) => {
  if (token === 'fake-centro-token') {
    return {
      email: 'anylearn@formaccio.net',
      name: 'Formacció',
      avatar: '/formaccio-logo.png',
      token: 'fake-centro-token',
    };
  }

  const data = {
    email: 'longboqiu@gmail.com',
    name: 'Longbo',
    lastName: 'Qiu',
    avatar: 'https://picsum.photos/200',
    token,
  };
  return data;
};

export const authService = { logIn, getUserData };
