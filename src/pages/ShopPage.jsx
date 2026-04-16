import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('All');
  const { addToCart } = useCart();

  const list = useMemo(() => products.filter((p) => (category === 'All' || p.category === category) && (p.name.toLowerCase().includes(keyword.toLowerCase()) || p.description.toLowerCase().includes(keyword.toLowerCase()))), [category, keyword]);

  return (
    <div className="page">
      <h1>Shop</h1>
      <div className="toolbar card">
        <input placeholder="Search products" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>{categories.map((c) => <option key={c}>{c}</option>)}</select>
      </div>
      <div className="grid products">{list.map((p) => <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />)}</div>
    </div>
  );
}
