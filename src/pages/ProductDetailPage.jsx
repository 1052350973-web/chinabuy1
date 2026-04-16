import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';
import { formatMoney } from '../utils/currencyFormatter';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product?.options.color?.[0] || 'Default');
  const [size, setSize] = useState(product?.options.size?.[0] || 'Default');
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { currency } = useCurrency();

  const rec = useMemo(() => products.filter((p) => p.id !== id).slice(0, 3), [id]);
  if (!product) return <p>Product not found.</p>;

  const variant = { color, size };
  return (
    <div className="page">
      <div className="detail">
        <div>
          <img className="main-image" src={mainImage} alt={product.name} />
          <div className="row">{product.images.map((img) => <img key={img} src={img} alt="thumb" className="thumb" onClick={() => setMainImage(img)} />)}</div>
        </div>
        <div className="card">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>¥{product.basePriceRMB} / {formatMoney(product.convertedPrices[currency], currency)}</p>
          <label>Color <select value={color} onChange={(e) => setColor(e.target.value)}>{product.options.color.map((v) => <option key={v}>{v}</option>)}</select></label>
          <label>Size <select value={size} onChange={(e) => setSize(e.target.value)}>{product.options.size.map((v) => <option key={v}>{v}</option>)}</select></label>
          <label>Quantity <input type="number" min="1" value={qty} onChange={(e) => setQty(Number(e.target.value))} /></label>
          <p>Processing: 1–3 business days. Shipping time depends on selected shipping method.</p>
          <div className="row"><button onClick={() => addToCart(product, qty, variant)}>Add to Cart</button><button className="secondary" onClick={() => { addToCart(product, qty, variant); navigate('/checkout'); }}>Buy Now</button></div>
        </div>
      </div>
      <h2>Recommended Products</h2>
      <div className="grid products">{rec.map((p) => <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />)}</div>
      <Link to="/shop">Back to Shop</Link>
    </div>
  );
}
