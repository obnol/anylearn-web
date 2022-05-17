import axios from 'axios';

const API = 'https://vgafib.org:9091/mock/start';

const logIn = async (email, password) => {
   return axios.post(API, {
     email,
     password,
   });
  return { status: 200 };
};

const getUserData = (token) => {
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
