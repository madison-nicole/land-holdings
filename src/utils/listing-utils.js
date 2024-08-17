// set up enum for entry types
export const EntryTypes = Object.freeze({
  Owner: 'OWNER',
  LandHolding: 'LAND HOLDING',
});

export const emptyOwnerData = {
  ownerName: '',
  entityType: '',
  ownerType: '',
  address: '',
  totalHoldings: 0,
  classA: 0,
  classB: 0,
  classC: 0,
  classD: 0,
  legalEntities: 0,
  mineralAcres: 0,
};

export const emptyLandData = {
  name: '',
  ownerName: '',
  legalEntity: '',
  mineralAcres: 0,
  royalty: 0,
  sectionName: '',
  section: '',
  township: '',
  range: '',
  titleSource: '',
};

// returns true if township is invalid
export function isTownshipInvalid(input) {
  if (input[3] !== 'N' || input[3] !== 'S') {
    return true;
  }
  return false;
}

// returns true if range is invalid
export function isRangeInvalid(input) {
  if (input[3] !== 'E' || input[3] !== 'W') {
    return true;
  }
  return false;
}
