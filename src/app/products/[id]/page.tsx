'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import sanityClient from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useCart } from '@/app/Context/CartContext';
import Image from 'next/image';

interface Product {
  _id: number;
  productName: string;
  category: string;
  price: string;
  inventory: number;
  colors?: string[];
  status: string;
  description: string;
  image?: {
    asset: {
      url: string; // Ensure this field is present and it's a string
    };
  };
}

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { addItem } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const unwrappedParams = await params;
        setProductId(unwrappedParams.id); // Set product ID
      } catch (error) {
        console.error('Error fetching params:', error);
      }
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const query = `*[_type == "product" && _id == "${productId}"]{
            _id,
            productName,
            category,
            price,
            inventory,
            colors,
            status,
            description,
            image
          }`;
          const data = await sanityClient.fetch(query);
          setProduct(data[0] || null);
        } catch (error) {
          console.error('Error fetching product:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product && product.image) {
      addItem({
        id: product._id,
        image: product.image.asset.url, // Extract the URL here
        productName: product.productName,
        detail: product.category,
        quantity: 1,
        price: product.price,
      });
      router.push('/Bag');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-[24px] text-center font-bold">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-[40px] text-center font-extrabold">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-6 lg:p-12 max-w-6xl mx-auto">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        {product.image && (
          <Image
            src={urlFor(product.image)} // Correct usage of urlFor with width
            alt={product.productName}
            className="object-contain"
            width={400}
            height={400}
          />
        )}
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-4 text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold">{product.productName}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg lg:text-2xl font-semibold text-gray-800">${product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
        >
          <Image src="/buy.png" alt="Buy now" width={24} height={24} />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
