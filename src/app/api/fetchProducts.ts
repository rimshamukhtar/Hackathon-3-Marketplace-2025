// // api/fetchProducts.ts
// import { createClient } from '@sanity/client';  // Import Sanity client
// import { Product } from '../../app/api/types'; // Optionally, import a Product type if you have one

// // Create the Sanity client instance
// const client = createClient({
//   projectId: 'your_project_id',  // Replace with your Sanity project ID
//   dataset: 'production',         // Replace with your dataset name
//   useCdn: true,                  // Use the CDN for faster fetching (can set to false for drafts)
//   apiVersion: '2023-01-01',      // Use the latest version of the Sanity API
// });

// // Fetch the list of products from the Sanity database
// export const fetchProducts = async (): Promise<Product[]> => {
//   const query = `*[_type == "product"]`;  // Adjust this query to match your schema
//   const products = await client.fetch(query); // Fetch products from Sanity
//   return products;  // Return the products
// };


// /app/api/fetchProducts.ts

// import { Product } from '../../app/api/types';  // Assuming this is where the Product type is defined

// Existing fetchProducts function
export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('/api/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
};

// New fetchProductById function to fetch a single product by ID
export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`/api/products/${id}`);  // Assuming your API has this endpoint
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};
