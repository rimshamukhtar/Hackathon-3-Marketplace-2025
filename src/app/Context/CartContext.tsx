'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { StaticImageData } from 'next/image';

interface CartItem {
  id: number;
  image: StaticImageData | string;
  productName: string;
  detail: string;
  quantity: number;
  price: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, type: 'increase' | 'decrease') => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          // Validate structure of saved items
          const validItems = parsedCart.filter((item) =>
            item && typeof item.id === 'number' && typeof item.quantity === 'number'
          );
          setItems(validItems);
        } else {
          console.warn('Invalid cart data in localStorage.');
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  }, []);

  // Save cart items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1) }
            : item
        );
      }
      return [...currentItems, { ...newItem, quantity: newItem.quantity || 1 }];
    });
  };

  const updateQuantity = (id: number, type: 'increase' | 'decrease') => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: type === 'increase' ? item.quantity + 1 : Math.max(0, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
