'use client'

import React from 'react';
import { useWishlist } from '../Context/WishlistContext';

// Define types for the product in the wishlist
interface WishlistProduct {
  id: string; // Assuming `id` is a string, change it if it's a different type
  name: string;
  image: string; // Image URL as a string
}

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
      {wishlist.length > 0 ? (
        <ul className="space-y-4">
          {wishlist.map((product: WishlistProduct) => (
            <li key={product.id} className="flex items-center space-x-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
