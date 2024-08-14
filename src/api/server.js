import axios from 'axios';

// API url
export const SERVER_URL = '';

/**
 * Sign in user
 * @param {object} fields - username or email, password
 * @returns token and user data if successful
 */
export async function signin(fields) {
  const response = await axios.post(`${SERVER_URL}/signin`, fields);
  return { token: response.data.token, user: response.data.user };
}

/**
 * Sign up user
 * @param {object} fields - username, email, password
 * @returns token if successful
 */
export async function signup(fields) {
  const response = await axios.post(`${SERVER_URL}/signup`, fields);
  const { token, user } = response.data;
  return { token, user };
}
