function formatPhoneInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  let result = '';

  if (digits.length > 0) {
    result = `${digits.slice(0, 3)}`;
  }
  if (digits.length >= 4) {
    result = `(${result})-${digits.slice(3, 6)}`;
  }
  if (digits.length >= 7) {
    result += `-${digits.slice(6)}`;
  }

  return result;
}

export default formatPhoneInput;
