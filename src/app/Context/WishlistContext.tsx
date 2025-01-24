'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the structure of a product in the wishlist
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  [key: string]: any; // Allow additional properties for flexibility
}

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        const parsedWishlist = JSON.parse(savedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        } else {
          console.warn('Invalid wishlist data in localStorage.');
        }
      }
    } catch (error) {
      console.error('Error loading wishlist from localStorage:', error);
    }
  }, []);

  // Update localStorage whenever the wishlist changes
  const updateLocalStorage = (newWishlist: Product[]) => {
    try {
      setWishlist(newWishlist);
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    } catch (error) {
      console.error('Error saving wishlist to localStorage:', error);
    }
  };

  // Add a product to the wishlist
  const addToWishlist = (product: Product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      updateLocalStorage([...wishlist, product]);
    }
  };

  // Remove a product from the wishlist
  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    updateLocalStorage(updatedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the WishlistContext
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
