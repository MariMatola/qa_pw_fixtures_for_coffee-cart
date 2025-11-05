/**
 * Formats unit price with number of units — e.g.: "10.00 x 1"
 */
export function unitPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  const formattedPrice = unitPrice.toFixed(2);
  return `${formattedPrice} x ${unitsNumber}`;
}

/**
 * Formats price with currency — e.g.: "$10.00"
 */
export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice.toFixed(2)}`;
}

/**
 * Calculates total price and formats it — e.g.: "Total: $10.00"
 */
export function totalPriceFormatStr(unitPrice: number, unitsNumber: number): string {
  const total = unitPrice * unitsNumber;
  return `Total: $${total.toFixed(2)}`;
}