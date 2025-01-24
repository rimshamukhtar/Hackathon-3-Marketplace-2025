 

  interface Product {
    id: string | number; // Allow id to be either a string or a number
    name: string;
    productName: string;
    detail?: string | number;
    quantity: number;
    price: string; // Ensure price is consistent
    image: string;
    category?: string;
  }
  