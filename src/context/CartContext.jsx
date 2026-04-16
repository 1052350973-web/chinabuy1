import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product, qty = 1, variant = {}) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id && i.variantKey === JSON.stringify(variant));
      if (found) {
        return prev.map((i) => i === found ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        image: product.images[0],
        priceRMB: product.basePriceRMB,
        prices: product.convertedPrices,
        quantity: qty,
        variant,
        variantKey: JSON.stringify(variant)
      }];
    });
  };

  const updateQty = (id, variantKey, quantity) => setItems((prev) => prev.map((i) => i.id === id && i.variantKey === variantKey ? { ...i, quantity: Math.max(1, quantity) } : i));
  const removeItem = (id, variantKey) => setItems((prev) => prev.filter((i) => !(i.id === id && i.variantKey === variantKey)));
  const clearCart = () => setItems([]);

  const value = useMemo(() => ({ items, addToCart, updateQty, removeItem, clearCart }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
