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
      return owner;
    } catch (error) {
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
 * Fetch one owner listing saved on a user's account
 * @param string unique user ID
 * @param string unique owner name
 * @param string auth token from Clerk
 * @returns owner if owner is successfuly fetched, else throws error
 */
export function fetchOwner(userId, ownerName, token) {
  return async () => {
    try {
      const owner = await Server.getOwner(userId, ownerName, token);
      return owner;
    } catch (error) {
      // For now, if we get an error, just log it.
      // Add error handling later
      throw new Error('Unable to fetch owner');
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

/**
 * Update an owner listing from a user's account
 * @param string unique user ID
 * @param string the unique owner name
 * @param string auth token from Clerk
 * @returns updated owner if owner is successfuly saved, else throws error
 */
export function updateOwner(userId, ownerName, ownerData, token) {
  return async () => {
    try {
      const updatedOwner = await Server.updateOwnerListing(userId, ownerName, ownerData, token);
      return updatedOwner;
    } catch (error) {
      throw new Error('Unable to update owner');
    }
  };
}

/**
 * Save a land holding to an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param object the land data
 * @param string auth token from Clerk
 * @returns holding if it is successfuly saved, else throws error
 */
export function addLandHolding(userId, landData, token) {
  const { ownerName } = landData;
  return async () => {
    try {
      const land = await Server.saveLandHolding(userId, ownerName, landData, token);
      return land;
    } catch (error) {
      throw new Error('Unable to add land holding');
    }
  };
}

/**
 * Fetch the land holdings of an owner
 * @param string unique user ID
 * @param string unique owner name
 * @param string auth token from Clerk
 * @returns holdings if they are successfuly fetched, else throws error
 */
export function fetchOwnersLandHoldings(userId, ownerName, token) {
  return async () => {
    try {
      const landHoldings = await Server.getOwnersLandHoldings(userId, ownerName, token);
      return landHoldings;
    } catch (error) {
      // For now, if we get an error, just log it.
      // Add error handling later
      throw new Error('Unable to fetch land holdings of that owner');
    }
  };
}

/**
 * Delete a land holding from an owner
 * @param string unique user ID
 * @param string the unique owner name
 * @param string the unique land holding name
 * @param string auth token from Clerk
 * @returns deleted holding if it is successfuly deleted, else throws error
 */
export function deleteLandHolding(userId, ownerName, landName, token) {
  return async () => {
    try {
      const deletedLand = await Server.deleteLandListing(userId, ownerName, landName, token);
      return deletedLand;
    } catch (error) {
      throw new Error('Unable to delete land holding');
    }
  };
}

/**
 * Fetch one owner listing saved on a user's account
 * @param string unique user ID
 * @param string unique owner name
 * @param string unique land name
 * @param string auth token from Clerk
 * @returns owner if owner is successfuly fetched, else throws error
 */
export function fetchLandHolding(userId, ownerName, landName, token) {
  return async () => {
    try {
      const land = await Server.getLandHolding(userId, ownerName, landName, token);
      return land;
    } catch (error) {
      throw new Error('Unable to fetch land holding');
    }
  };
}

/**
 * Update a land holding from a user's account
 * @param string unique user ID
 * @param string the unique owner name
 * @param object the land holding data
 * @param string auth token from Clerk
 * @returns updated land if it is successfuly saved, else throws error
 */
export function updateLandHolding(userId, ownerName, landName, landData, token) {
  return async () => {
    try {
      const updatedLand = await Server.updateLandListing(userId, ownerName, landName, landData, token);
      return updatedLand;
    } catch (error) {
      throw new Error('Unable to update land holding');
    }
  };
}
