import { Link, useLocation } from 'react-router-dom';
import StatusTimeline from '../components/StatusTimeline';

export default function OrderSuccessPage() {
  const { state } = useLocation();
  const order = state?.order;
  const steps = ['Pending Purchase', 'Purchased', 'Packed', 'Shipped', 'Delivered'];

  return (
    <div className="page card">
      <h1>Order Successfully Placed!</h1>
      <p>Thank you for choosing ChinaBuy.</p>
      <p>Order Number: <strong>{order?.orderId || 'CBDEMO2026'}</strong></p>
      <StatusTimeline steps={steps} />
      <p>Destination Country: {order?.country || 'USA'}</p>
      <p>Shipping Method: {order?.shippingMethod || 'economy'}</p>
      <Link className="btn" to="/shop">Continue Shopping</Link>
    </div>
  );
}
