export const SHIPPING_METHODS = {
  economy: { id: 'economy', label: 'Economy Shipping', eta: '15–25 business days' },
  standard: { id: 'standard', label: 'Standard Shipping', eta: '10–15 business days' },
  express: { id: 'express', label: 'Express Air Shipping', eta: '5–8 business days' }
};

export const SHIPPING_RULES = {
  USA: { processingTime: '1–3 business days', economy: 12, standard: 20, express: 35 },
  UK: { processingTime: '1–3 business days', economy: 10, standard: 18, express: 32 },
  Canada: { processingTime: '1–3 business days', economy: 13, standard: 22, express: 36 },
  Australia: { processingTime: '1–3 business days', economy: 14, standard: 24, express: 38 }
};
