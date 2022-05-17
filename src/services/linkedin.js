import axios from 'axios';

const login = async (code) => {
  try {
    const response = await axios({
      url: `https://vgafib.org:9091/users/${code}`,
      method: 'POST',
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const linkedinService = { login };

/*
import axios from 'axios';

const login = async (code) => {
  try {
    const response = await axios({
      url: `https://vgafib.org:9091/users/${code}`,
      method: 'POST',
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const linkedinService = { login };
*/