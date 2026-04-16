import { Link } from 'react-router-dom';
import { formatMoney } from '../utils/currencyFormatter';
import { useCurrency } from '../context/CurrencyContext';

export default function ProductCard({ product, onAdd }) {
  const { currency } = useCurrency();
  return (
    <article className="card product-card">
      <Link to={`/product/${product.id}`}><img className="product-image" src={product.images[0]} alt={product.name} /></Link>
      <div className="tag">{product.tag}</div>
      <h3>{product.name}</h3>
      <p className="muted">{product.description}</p>
      <div className="price-row">
        <div>
          <div className="price">{formatMoney(product.convertedPrices[currency], currency)}</div>
          <div className="price-sub">≈ ¥{product.basePriceRMB}</div>
        </div>
        <button onClick={onAdd}>Add to Cart</button>
      </div>
    </article>
  );
}
