// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import client from "../../sanity/lib/client"; // Import your Sanity client
// import SideBar from "@/components/Side";
// import { urlFor } from "../../sanity/lib/image";

// // Define types for the fetched product data
// interface Product {
//   _id: string;
//   name: string;
//   image: {
//     asset: {
//       _ref: string; // This reference field points to the image in Sanity
//     };
//   };
//   category: string;
//   price: string;
//   color: string;
//   code: string;
// }

// const Related: { category: string }[] = [
//   { category: "Best Selling Products" },
//   { category: "Best Shoes" },
//   { category: "New Basketball Shoes" },
//   { category: "New Football Shoes" },
//   { category: "New Men's Shoes" },
//   { category: "New Running Shoes" },
//   { category: "Best Men's Shoes" },
//   { category: "New Jordan Shoes" },
//   { category: "Best Women's Shoes" },
//   { category: "Best Training & Gym" },
// ];

// const Products = async () => {
//   // Fetch data from Sanity
//   const products: Product[] = await client.fetch(
//     `*[_type == "product"]{
//       _id,
//       name,
//       image,
//       category,
//       price,
//       color,
//       code
//     }`
//   );

//   return (
//     <div>
//       <div className="flex">
//         <SideBar />
//         <div className="px-4 py-8">
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div key={product._id}>
//                 <Link href={`/products/${product._id}`}>
//                   <Image
//                     src={urlFor(product.image)} // Ensure this returns a valid URL string
//                     alt={product.name}
//                     className="rounded-md xl:w-[300px] xl:h-[300px]"
//                     width={200}
//                     height={200}
//                   />
//                   <h1 className="text-[12px] text-[#9E3500] font-medium mt-2">
//                     {product.code}
//                   </h1>
//                   <h3 className="text-[12px] font-bold">{product.name}</h3>
//                   <p className="text-[#757575] text-[12px]">{product.category}</p>
//                   <p className="text-[#757575] text-[12px]">{product.color}</p>
//                   <p className="text-black font-medium text-[10px] mt-1">
//                     ${product.price}
//                   </p>
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <div className="border-t w-auto mt-10"></div>
//           <p className="text-[15px] font-medium mt-8">Related Categories</p>
//           <div className="mt-4 flex flex-wrap gap-2 justify-center xl:justify-start lg:justify-start sm:justify-start">
//             {Related.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-transparent border w-[120px] h-[30px] text-center rounded-full flex items-center justify-center"
//               >
//                 <button className="text-[10px] font-medium">{item.category}</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React from "react";
import Image from "next/image";
import Link from "next/link";
import client from "../../sanity/lib/client"; // Import your Sanity client
import SideBar from "@/components/Side";
import { urlFor } from "../../sanity/lib/image";

// Define types for the fetched product data
interface Product {
  _id: string;
  name: string;
  image: {
    asset: {
      _ref: string; // This reference field points to the image in Sanity
    };
  };
  category: string;
  price: string;
  color: string;
  code: string;
}

const Related: { category: string }[] = [
  { category: "Best Selling Products" },
  { category: "Best Shoes" },
  { category: "New Basketball Shoes" },
  { category: "New Football Shoes" },
  { category: "New Men's Shoes" },
  { category: "New Running Shoes" },
  { category: "Best Men's Shoes" },
  { category: "New Jordan Shoes" },
  { category: "Best Women's Shoes" },
  { category: "Best Training & Gym" },
];

// Fetch data from Sanity
async function fetchProducts() {
  return await client.fetch<Product[]>(
    `*[_type == "product"]{
      _id,
      name,
      image,
      category,
      price,
      color,
      code
    }`
  );
}

const Products = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <div className="flex">
        <SideBar />
        <div className="px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id}>
                <Link href={`/products/${product._id}`}>
                  <Image
                    src={urlFor(product.image)} // Ensure this returns a valid URL string
                    alt={product.name}
                    className="rounded-md xl:w-[300px] xl:h-[300px]"
                    width={200}
                    height={200}
                  />
                  <h1 className="text-[12px] text-[#9E3500] font-medium mt-2">
                    {product.code}
                  </h1>
                  <h3 className="text-[12px] font-bold">{product.name}</h3>
                  <p className="text-[#757575] text-[12px]">{product.category}</p>
                  <p className="text-[#757575] text-[12px]">{product.color}</p>
                  <p className="text-black font-medium text-[10px] mt-1">
                    ${product.price}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="border-t w-auto mt-10"></div>
          <p className="text-[15px] font-medium mt-8">Related Categories</p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center xl:justify-start lg:justify-start sm:justify-start">
            {Related.map((item, index) => (
              <div
                key={index}
                className="bg-transparent border w-[120px] h-[30px] text-center rounded-full flex items-center justify-center"
              >
                <button className="text-[10px] font-medium">{item.category}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
