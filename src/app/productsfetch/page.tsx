'use client';

import React, { useEffect, useState } from 'react';
import sanityClient from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link'; 
import ProductCard from '@/components/ProductCard'; 
import SideBar from '@/components/Side';
import SearchBar from '@/components/SearchBar'; 

interface Product {
  _id: number;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors?: string[];
  status: string;
  description: string;
  image?: any;
}

const Home = () => {
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
          category,
          price,
          inventory,
          colors,
          status,
          description,
          image
        }`;
        const data = await sanityClient.fetch(query); // Fetch data from Sanity
        setProducts(data);
        setFilteredProducts(data); 
      } catch (err: any) {
        console.error("Error fetching products:", err.message);
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProducts();
  }, []);

  // Function to handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();

    // Filter products by name or category
    const results = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredProducts(results);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar for larger screens */}
      <div className="w-full lg:w-1/4">
        <SideBar />
      </div>

      <div className="w-full lg:w-3/4 p-4">
        <h1 className="text-xl font-bold mb-4 text-center lg:text-left">
          Product List
        </h1>

        {/* Display error message */}
        {error && (
          <p className="bg-red-100 text-red-800 border border-red-300 p-4 rounded mb-4">
            {error}
          </p>
        )}

        {/* SearchBar Component */}
        <SearchBar onSearch={handleSearch} /> {/* Pass the handleSearch function as prop */}

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div
            className="grid gap-4 mt-4"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid
            }}
          >
            {/* Display filtered products */}
            {filteredProducts.length === 0 ? (
              <p className="col-span-full text-center">No products found.</p>
            ) : (
              filteredProducts.map((product) => (
                <div key={product._id}>
                  <ProductCard
                    id={product._id}
                    image={urlFor(product.image)}
                    name={product.productName}
                    price={`$${product.price}`}
                    category={product.category}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;



