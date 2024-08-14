import { useSelector } from 'react-redux';

/**
 * Function will check whether or not a user is signed in
 * @returns a boolean value which indicates true if authenticated
 */
function useAuthenticated() {
  return useSelector((reduxState) => reduxState.auth.authenticated);
}

export default useAuthenticated;
