import axios from 'axios';
import { createBrowserHistory } from 'history';

const LOCAL_URL = 'https://sc-backend.ngrok.io';
const DEV_URL = 'https://sc-backend-dev.herokuapp.com';
const PROD_URL = 'https://sc-backend-prod.herokuapp.com';

const ACCESS_TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';
const ACCESS_TOKEN_EXPIRE_KEY = 'expiresAt';
const REFRESH_TOKEN_EXPIRE_KEY = 'refreshExpiresAt';

class AuthToken {
  constructor(tokenType, expiresAtKey, API) {
    this.tokenKey = tokenType;
    this.expireKey = expiresAtKey;
    this.API = API;

    this.initializeAccessHeader();
  }

  set(token, expiresIn) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(
      this.expireKey,
      new Date().getTime() + expiresIn * 1000
    );

    this.initializeAccessHeader();
  }

  get() {
    return localStorage.getItem(this.tokenKey);
  }

  initializeAccessHeader() {
    let token = this.get();
    if (this.tokenKey === ACCESS_TOKEN_KEY && token)
      this.API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  exists() {
    return !!this.get();
  }

  header() {
    return `Bearer ${this.get()}`;
  }

  fullHeaderConfig() {
    return {
      headers: {
        Authorization: this.header(),
      },
    };
  }

  expiresAt() {
    return localStorage.getItem(this.expireKey);
  }

  hasExpired() {
    let currentTime = new Date().getTime();
    return currentTime > this.expiresAt();
  }

  delete() {
    localStorage.setItem(this.tokenKey, '');
    localStorage.setItem(this.expireKey, -1);

    if (this.tokenKey === ACCESS_TOKEN_KEY)
      delete this.API.defaults.headers.common['Authorization'];
  }
}

const API = axios.create({
  baseURL: PROD_URL,
  headers: {
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const TOKENS = {
  access: new AuthToken(ACCESS_TOKEN_KEY, ACCESS_TOKEN_EXPIRE_KEY, API),
  refresh: new AuthToken(REFRESH_TOKEN_KEY, REFRESH_TOKEN_EXPIRE_KEY, API),
};

async function tryRefreshAccessToken() {
  try {
    // Try fetching new access token with refresh token
    const res = await API.post('/api/user/refresh', {}, TOKENS.refresh.fullHeaderConfig());
    TOKENS.access.set(res.data.access, res.data.access_expires_in);
  } catch (err) {
    // Refresh token has expired, log the user out
    TOKENS.access.delete();
    TOKENS.refresh.delete();

    // Return to main page
    createBrowserHistory().push('/');
  }
}

API.interceptors.response.use(res => res, async err => {
  const badToken = err.response.status == 401;
  const isAuthToken = err.config.headers['Authorization'] == TOKENS.access.header();
  console.log('isAuthToken', isAuthToken);
  
  if (badToken && isAuthToken) {
    await tryRefreshAccessToken();
    err.config.headers['Authorization'] = TOKENS.access.header();

    return axios.request(err.config);
  }

  throw err;
});

export { API, TOKENS };
