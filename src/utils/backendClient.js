import axios from 'axios';

const LOCAL_URL = 'https://sc-backend.ngrok.io';
const DEV_URL = 'https://sc-backend-dev.herokuapp.com';
const PROD_URL = 'https://sc-backend-prod.herokuapp.com';

const ACCESS_TOKEN_KEY  = 'token';
const REFRESH_TOKEN_KEY = 'refreshToken';
const ACCESS_TOKEN_EXPIRE_KEY  = 'expiresAt';
const REFRESH_TOKEN_EXPIRE_KEY = 'refreshExpiresAt';

const API = axios.create({
  baseURL: LOCAL_URL,
  headers: {
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

class AuthToken {
  constructor(tokenType, expiresAtKey) {
    this.tokenKey = tokenType
    this.expireKey = expiresAtKey;
  }

  set(token, expiresIn) {
    localStorage.setItem(this.tokenKey, this.token);
    localStorage.setItem(this.expireKey, new Date().getTime() + expiresIn);

    if (this.tokenKey === ACCESS_TOKEN_KEY)
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  get() {
    return localStorage.getItem(this.tokenKey);
  }

  exists() {
    return this.get() !== '';
  }

  header() {
    return `Bearer ${this.get()}`;
  }

  fullHeaderConfig() {
    return {
      headers: {
        Authorization: this.header(),
      },
    }
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
      delete API.defaults.headers.common['Authorization'];
  }
}

const TOKENS = {
  access: new AuthToken(ACCESS_TOKEN_KEY, ACCESS_TOKEN_EXPIRE_KEY),
  refresh: new AuthToken(REFRESH_TOKEN_KEY, REFRESH_TOKEN_EXPIRE_KEY)
}

export { API, TOKENS };