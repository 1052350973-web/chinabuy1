import { ORDER_STATUS } from '../constants/orderStatus';

export function createMockOrder(payload) {
  const now = new Date().toISOString();
  return {
    orderId: payload.orderId,
    customerInfo: payload.customerInfo,
    items: payload.items,
    country: payload.country,
    shippingMethod: payload.shippingMethod,
    shippingFee: payload.shippingFee,
    serviceFee: payload.serviceFee,
    totalAmount: payload.totalAmount,
    currency: payload.currency,
    paymentMethod: payload.paymentMethod,
    paymentStatus: payload.paymentStatus || 'unpaid',
    orderStatus: ORDER_STATUS.PENDING_PURCHASE,
    trackingNumber: 'TBD',
    createdAt: now,
    updatedAt: now
  };
}
