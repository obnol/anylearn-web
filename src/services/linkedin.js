import axios from 'axios';

const getAccessToken = async (code) => {
  return await axios({
    url: 'https://www.linkedin.com/oauth/v2/accessToken',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://localhost:3000/linkedin',
      client_id: '78skdzmjsq9y4b',
      client_secret: 'wX7RFsMVbMkHzzcH',
    },
    proxy: {
      protocol: 'https',
      host: 'smartproxy.rnet.works',
      port: 7000,
      auth: {
        username: 'user-RPG_GIywCRXqSh-country-ES-session-RLltzuqlrBweOBWp',
        password: 'G485uiJTMM',
      },
    },
  });
};

export const linkedinService = { getAccessToken };
