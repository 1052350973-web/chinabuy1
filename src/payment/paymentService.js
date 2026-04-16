export async function processPayment({ paymentMethod }) {
  return {
    status: 'pending',
    message: `Demo only: ${paymentMethod} integration coming soon.`
  };
}
