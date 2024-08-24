// determine variant for horizontal cards to alternate colors between outline and filled
export function alternateCardColor(index) {
  if (index % 2 === 0) {
    return 'outline';
  } else {
    return 'filled';
  }
}

export function alternateBgColor(index) {
  if (index % 2 === 0) {
    return '#bee3f8';
  } else {
    return 'white';
  }
}
