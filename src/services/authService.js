export async function mockLogin(email) {
  return {
    id: 'u_demo_001',
    name: 'Demo User',
    email,
    country: 'USA',
    role: 'customer'
  };
}
