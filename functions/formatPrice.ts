function formatPrice(value: number): string {
  const isInteger = Number.isInteger(value);

  if (isInteger) {
    return value.toLocaleString("ru-RU");
  }

  return parseFloat(value.toFixed(2)).toLocaleString("ru-RU").replace(",", ".");
}

export default formatPrice;
