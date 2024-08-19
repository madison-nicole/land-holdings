import axios from 'axios';

// API url
export const SERVER_URL = 'http://localhost:9090/api';

// eslint-disable-next-line max-len
const token = 'eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18ya2V6ZVFsODdURWRKWGd5U2xTbEM1dlU5RkQiLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwOi8vbG9jYWxob3N0OjUxNzMiLCJleHAiOjE3MjQwMzM4MzIsImlhdCI6MTcyNDAzMzc3MiwiaXNzIjoiaHR0cHM6Ly9tZWV0LWJsdWVnaWxsLTUuY2xlcmsuYWNjb3VudHMuZGV2IiwibmJmIjoxNzI0MDMzNzYyLCJzaWQiOiJzZXNzXzJrckJ2eGhUSW9Ocnd5d21TNmh0b0dOdkcxeiIsInN1YiI6InVzZXJfMmtmMkV5UDhVZm5SWmRVTFI1SlhxMExQMkVVIn0.ARfP8W14drwBWdZotsIjUquTh48JNTsUS03Y9Xv5al-m47fM44K-ModUHWMU16ZTx3ig1PdzxNtATDx3TpbX-x8isB4ij4i8TCFMMOYkn5rahugLViralybrQUg_7fmccensmzCi-zyLfZvquxxOlNtbmff0jmMe0WBQHaNxbiK3eDDG7Ltu6vSKqgIivAGBIkP4X_h3nBsV9WB6zeuV89_ZPhzSpWfnyh7JZKJQx54sXAn6wJ70nqkkj4Vqu7Pdr6nFctr5YiCO_w78HLaYw6BdYBuJC3Ms_HSlwd-DklCPws1aglVAxf58eEHd_3IiioZxc5Vwwmiil_n8fwrKnQ';

/**
 * Save an owner listing to a user's account
 * @param {object} ownerData
 * @returns owner if owner is successfuly saved, else throw error
 */
export async function saveOwner(userId, ownerData) {
  const fields = { userId, ownerData };

  const response = await axios.post(`${SERVER_URL}/${userId}/owners`, fields, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

/**
 * Fetches a user's saved game
 * @param {string} username
 * @returns array of user's games
 */
export async function getOwners(userId) {
  const response = await axios.get(`${SERVER_URL}/${userId}/owners`, { headers: { Authorization: `Bearer ${token}` } });
  return Array.from(response.data);
}
