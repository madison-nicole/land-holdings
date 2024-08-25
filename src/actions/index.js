import * as Server from '../api/server';

/**
 * Save an owner listing to a user's account
 * @param string unique user ID
 * @param object the owner data
 * @param string auth token from Clerk
 * @returns owner if owner is successfuly saved, else throws error
 */
export function addOwner(userId, ownerData, token) {
  return async () => {
    try {
      const owner = await Server.saveOwner(userId, ownerData, token);
      console.log('addOwner owner', owner);
      return owner;
    } catch (error) {
      console.log(error);
      throw new Error('Unable to add owner');
    }
  };
}

/**
 * Fetch all owner listings saved on a user's account
 * @param string unique user ID
 * @param string auth token from Clerk
 * @returns owners if owners are successfuly fetched, else throws error
 */
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
 * Delete an owner listing from a user's account
 * @param string unique user ID
 * @param string the unique owner name
 * @param string auth token from Clerk
 * @returns deleted owner if owner is successfuly deleted, else throws error
 */
export function deleteOwner(userId, ownerName, token) {
  return async () => {
    try {
      const deletedOwner = await Server.deleteOwnerListing(userId, ownerName, token);
      return deletedOwner;
    } catch (error) {
      throw new Error('Unable to delete owner');
    }
  };
}
