import axios from 'axios';

// API url
export const SERVER_URL = 'http://localhost:9090/api';

/**
 * Save an owner listing to a user's account
 * @param string unique user ID
 * @param object an owner's data
 * @param string auth token from Clerk
 * @returns owner if owner is successfuly saved, else throw error
 */
export async function saveOwner(userId, ownerData, token) {
  const fields = { userId, ownerData };

  const response = await axios.post(`${SERVER_URL}/${userId}/owners`, fields, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Fetches a user's saved owners
 * @param string unique user ID
 * @param string auth token from Clerk
 * @returns array of user's saved owners
 */
export async function getOwners(userId, token) {
  const response = await axios.get(`${SERVER_URL}/${userId}/owners`, { headers: { Authorization: `Bearer ${token}` } });
  return Array.from(response.data);
}

/**
 * Fetches a user's saved owner
 * @param string unique user ID
 * @param string unique owner name
 * @param string auth token from Clerk
 * @returns the owner
 */
export async function getOwner(userId, ownerName, token) {
  const response = await axios.get(`${SERVER_URL}/${userId}/owners/${ownerName}`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Deletes an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param string auth token from Clerk
 * @returns deleted owner if deletion is successful
 */
export async function deleteOwnerListing(userId, ownerName, token) {
  const response = await axios.delete(`${SERVER_URL}/${userId}/owners/${ownerName}`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Updates an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param string auth token from Clerk
 * @returns updated owner if update is successful
 */
export async function updateOwnerListing(userId, ownerName, ownerData, token) {
  const response = await axios.put(`${SERVER_URL}/${userId}/owners/${ownerName}`, ownerData, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}
