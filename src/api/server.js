import axios from 'axios';

// API url
export const SERVER_URL = 'http://localhost:9090/api';

/**
 * Save an owner listing to a user's account
 * @param {object} ownerData
 * @returns owner if owner is successfuly saved, else throw error
 */
export async function saveOwner(userId, ownerData) {
  const fields = ownerData;

  const response = await axios.post(`${SERVER_URL}/${userId}/owners`, fields);
  return response.data;
}

/**
 * Fetches a user's saved game
 * @param {string} username
 * @returns array of user's games
 */
export async function getOwners(userId) {
  const response = await axios.get(`${SERVER_URL}/${userId}/owners`);
  return Array.from(response.data);
}
