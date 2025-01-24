import React from 'react';
import { useWishlist } from '../app/Context/WishlistContext';

interface Product {
  id: string ; // Allow both string and number for flexibility
  name: string;
  price: number;
  image: string;
  // Add any other fields your product object contains
}

interface WishlistButtonProps {
  product: Product;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // Ensure `id` comparison works for both string and number types
  const isInWishlist = wishlist.some(
    (item: Product) => String(item.id) === String(product.id)
  );

  const handleClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;
