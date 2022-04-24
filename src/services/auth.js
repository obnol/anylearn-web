import axios from 'axios';

const API = '';

const logIn = async (email, password) => {
  // return axios.post(`${API}/login`, {
  //   email,
  //   password,
  // });
  return { status: 200 };
};

export const authService = { logIn };
