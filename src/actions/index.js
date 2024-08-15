// import * as Server from '../api/server';

// // keys for actiontypes
// export const ActionTypes = {
//   // Auth Actions
//   AUTH_USER: 'AUTH_USER',
//   DEAUTH_USER: 'DEAUTH_USER',
//   AUTH_ERROR: 'AUTH_ERROR',
//   CLEAR_AUTH_ERROR: 'CLEAR_AUTH_ERROR',
// };

// export function signinUser(phone) {
//   // takes in an object with emailOrUsername and password (minimal user object)
//   // returns a thunk method that takes dispatch as an argument
//   return async (dispatch) => {
//     try {
//       const fields = phone;
//       const { token, user } = await Server.signin(fields);
//       const games = await Server.getUserGames(user.username);
//       dispatch({ type: ActionTypes.AUTH_USER });
//       dispatch({ type: ActionTypes.FETCH_USER_INFO, payload: user });
//       dispatch({ type: ActionTypes.FETCH_USER_GAMES, payload: games });

//       localStorage.setItem('token', token);
//     } catch (error) {
//       dispatch(authError(error.response.data));
//     }
//   };
// }

// export function signupUser(phone) {
//   // takes in an object with email and password (minimal user object)
//   // returns a thunk method that takes dispatch as an argument
//   return async (dispatch) => {
//     try {
//       const fields = phone;
//       const { token, user } = await Server.signup(fields);
//       localStorage.setItem('token', token);
//       dispatch({ type: ActionTypes.AUTH_USER });
//       dispatch({ type: ActionTypes.FETCH_USER_INFO, payload: user });
//     } catch (error) {
//       dispatch(authError(error.response.data.error));
//     }
//   };
// }

// // deletes token from localstorage
// // and deauths
// export function signoutUser(navigate) {
//   return (dispatch) => {
//     localStorage.removeItem('token');
//     dispatch({ type: ActionTypes.DEAUTH_USER });
//     navigate('/');
//   };
// }
