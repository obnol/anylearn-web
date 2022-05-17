import API from './API';

const logIn = async (email, password) => {
  return await API.post('/users/login', {
    email,
    password,
  });
};

const signUp = async (params) => {
  try {
    return await API.post('/users', params);
  } catch (error) {
    console.error(error);
  }
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

export const authService = { logIn, signUp, getUserData };
