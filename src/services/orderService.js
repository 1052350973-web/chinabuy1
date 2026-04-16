export function generateOrderId() {
  return `CB${Date.now().toString().slice(-8)}`;
}
