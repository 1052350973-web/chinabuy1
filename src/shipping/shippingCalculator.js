import { SHIPPING_RULES } from './shippingRules';

export function calculateShipping(country, method, totalWeight = 1) {
  const rule = SHIPPING_RULES[country];
  if (!rule || !rule[method]) return 0;
  const baseFee = rule[method];
  const weightFee = Math.max(0, totalWeight - 1) * 2;
  return baseFee + weightFee;
}
