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

// set up enum for entry types
export const listingTypes = Object.freeze({
  owners: 'owners',
  land: 'landHoldings',
});
