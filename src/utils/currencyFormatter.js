import { CURRENCY_SYMBOLS } from '../currency/exchangeRates';

export function formatMoney(amount, currency = 'USD') {
  const symbol = CURRENCY_SYMBOLS[currency] || '$';
  return `${symbol}${Number(amount).toFixed(2)}`;
}
