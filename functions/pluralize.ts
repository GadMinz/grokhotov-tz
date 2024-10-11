function pluralize(
  single: string,
  few: string,
  many: string,
  quantity: number,
) {
  const lastDigit = quantity % 10;
  const lastTwoDigits = quantity % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return many;
  }

  if (lastDigit === 1) {
    return single;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }

  return many;
}

export default pluralize;
