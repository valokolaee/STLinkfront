import { safeFixed } from "./text.utils";

export default (value: number | string, currency?: string | undefined) => {
  return value + " " + currency
  // return new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: currency || 'USD',
  // }).format(safeFixed (value));
};
