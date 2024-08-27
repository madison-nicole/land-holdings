import axios from 'axios';

// API url
// export const SERVER_URL = 'http://localhost:9090/api';
export const SERVER_URL = 'https://land-holdings-api.onrender.com/api';

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

/**
 * Save a land holding to an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param object land holding data
 * @param string auth token from Clerk
 * @returns holding if it is successfuly saved, else throw error
 */
export async function saveLandHolding(userId, ownerName, landData, token) {
  const response = await axios.post(`${SERVER_URL}/${userId}/owners/${ownerName}/land`, landData, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Fetches an owner's land holdings
 * @param string unique user ID
 * @param string unique owner name
 * @param string auth token from Clerk
 * @returns array of user's saved owners
 */
export async function getOwnersLandHoldings(userId, ownerName, token) {
  const response = await axios.get(`${SERVER_URL}/${userId}/owners/${ownerName}/land`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Deletes a land holding from an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param string unique land holding name
 * @param string auth token from Clerk
 * @returns deleted land holding if deletion is successful
 */
export async function deleteLandListing(userId, ownerName, landName, token) {
  const response = await axios.delete(`${SERVER_URL}/${userId}/owners/${ownerName}/land/${landName}`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Fetches a land holding from an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param string unique land holding name
 * @param string auth token from Clerk
 * @returns fetched land holding if fetch is successful
 */
export async function getLandHolding(userId, ownerName, landName, token) {
  const response = await axios.get(`${SERVER_URL}/${userId}/owners/${ownerName}/land/${landName}`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Updates a land holding
 * @param string unique user ID
 * @param string unique owner name
 * @param string unique land name
 * @param object land holding data
 * @param string auth token from Clerk
 * @returns updated owner if update is successful
 */
export async function updateLandListing(userId, ownerName, landName, landData, token) {
  const response = await axios.put(`${SERVER_URL}/${userId}/owners/${ownerName}/land/${landName}`, landData, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}
