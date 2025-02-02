'use client';

import React, { useEffect, useState } from 'react';
import sanityClient from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  _id: number;
  productName: string;
  price: number;
  image?: any;
}

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [error, setError] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        setError(null);

        const query = `*[_type == "product"]{
          _id,
          productName,
          price,
          image
        }`;
        const data = await sanityClient.fetch(query);
        setProducts(data);
        setFilteredProducts(data); 
      } catch (err: any) {
        console.error("Error fetching products:", err.message);
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const results = products.filter((product) =>
      product.productName.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(results);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Search Products</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-6 shadow-md text-lg"
      />
      {error && (
        <p className="bg-red-100 text-red-800 border border-red-300 p-4 rounded mb-4">
          {error}
        </p>
      )}
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        <div className="grid gap-4 mt-4" style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}>
          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product._id} className="border rounded-lg p-4 shadow-lg">
                <img
                  src={urlFor(product.image)}
                  alt={product.productName}
                  className="w-full h-48 object-cover"
                />
                <h2 className="text-xl font-semibold mt-2">{product.productName}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
