// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
  
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
//   },
//   // You can add other configurations if needed
// };

// export default nextConfig;

// module.exports = {
//   images: {
//     domains: ['cdn.sanity.io'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '', // Optional
//         pathname: '/**',
//       },
//     ],
//   },
// };

export default {
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '', // Optional
        pathname: '/**',
      },
      
    ],
  },
};

