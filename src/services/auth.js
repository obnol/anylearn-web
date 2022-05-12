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
