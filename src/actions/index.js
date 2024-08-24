import * as Server from '../api/server';

/**
 * Save an owner listing to a user's account
 * @param {object} data
 * @param string type of data, either owners or landHoldings
 * @param string unique user ID
 * @returns listing if listing is successfuly saved, else throw error
 */
export function addOwner(userId, ownerData, token) {
  return async () => {
    try {
      // const { user, newOwner } = await Server.saveOwner(userId, ownerData);
      const owner = await Server.saveOwner(userId, ownerData, token);
      console.log('addOwner owner', owner);
      return owner;
      // console.log('user, newOwner', user, newOwner);
      // const newListings = [...user.owners, newOwner];
      // console.log('newlistings', newListings);
      // return newListings;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to add owner');
    }
  };
}

export function fetchOwners(userId, token) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument
  return async () => {
    try {
      const owners = await Server.getOwners(userId, token);
      return owners;
    } catch (error) {
      // For now, if we get an error, just log it.
      // Add error handling later
      throw new Error('Unable to fetch owners');
    }
  };
}

/**
 * Save an owner listing to a user's account
 * @param {object} ownerData
 * @returns owner if owner is successfuly saved, else throw error
 */
// export async function saveOwner(ownerData) {
// const fields = ownerData;

// const response = await
// return response.data;
// }

// Add land holding listing to user's account
// export function addLandListing(landData) {
//   return async (dispatch) => {
//     try {
//       const { user, newGame } = await Server.saveLandHolding(landData);
//       const newGames = [...userGames, newGame];
//       dispatch({ type: ActionTypes.FETCH_USER_GAMES, payload: newGames });
//       dispatch({ type: ActionTypes.FETCH_USER_INFO, payload: user });
//     } catch (error) {
//       dispatch({ type: ActionTypes.ERROR_SET, message: error });
//     }
//   };
// }

// Update owner listing to user's account
// export function updateOwnerListing(userGames, username, game, review) {
//   return async (dispatch) => {
//     try {
//       const user = await Server.updateGame(username, game, review);
//       const newGames = [...userGames];
//       const gameIdx = newGames.findIndex((savedGame) => String(game.id) === String(savedGame.id));
//       newGames[gameIdx] = game;
//       dispatch({ type: ActionTypes.FETCH_USER_GAMES, payload: newGames });
//       dispatch({ type: ActionTypes.FETCH_USER_INFO, payload: user });
//     } catch (error) {
//       dispatch({ type: ActionTypes.ERROR_SET, message: error });
//     }
//   };
// }

// Update land holding listing to user's account
// export function updateLandListing(userGames, username, game, review) {
//   return async (dispatch) => {
//     try {
//       const user = await Server.updateGame(username, game, review);
//       const newGames = [...userGames];
//       const gameIdx = newGames.findIndex((savedGame) => String(game.id) === String(savedGame.id));
//       newGames[gameIdx] = game;
//       dispatch({ type: ActionTypes.FETCH_USER_GAMES, payload: newGames });
//       dispatch({ type: ActionTypes.FETCH_USER_INFO, payload: user });
//     } catch (error) {
//       dispatch({ type: ActionTypes.ERROR_SET, message: error });
//     }
//   };
// }

// export function fetchListings(userId, type) {
//   // takes in an object with email and password (minimal user object)
//   // returns a thunk method that takes dispatch as an argument
//   return async () => {
//     try {
//       const response = await axios.get(`${SERVER_URL}/${userId}/${type}`);
//       return response.data;
//     } catch (error) {
//       throw new Error('Error fetching listings');
//     }
//   };
// }
