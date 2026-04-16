import { Link } from 'react-router-dom';
import { formatMoney } from '../utils/currencyFormatter';
import { useCurrency } from '../context/CurrencyContext';

export default function ProductCard({ product, onAdd }) {
  const { currency } = useCurrency();
  return (
    <article className="card product-card">
      <Link to={`/product/${product.id}`}><img src={product.images[0]} alt={product.name} /></Link>
      <div className="tag">{product.tag}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>¥{product.basePriceRMB} / {formatMoney(product.convertedPrices[currency], currency)}</p>
      <button onClick={onAdd}>Add to Cart</button>
    </article>
  );
}
