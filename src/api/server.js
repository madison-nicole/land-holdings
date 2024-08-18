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
 * Save a game to a user's logged games
 * @param {string} username
 * @param {object} game
 * @param {object} review
 * @returns game if game is successfuly saved, else throw error
 */
// export async function saveGame(username, game, review) {
//   const fields = { username, game, review };

//   const response = await axios.post(`${SERVER_URL}/users/${username}/games`, fields, { headers: { authorization: localStorage.getItem('token') } });
//   return response.data;
// }
