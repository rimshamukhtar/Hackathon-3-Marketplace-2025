import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/Context/CartContext";
import WishlistButton from "./WishlistButton";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price, category }) => {
  const imageUrl = image && image.trim() !== "" ? image : "/path/to/placeholder-image.jpg";
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const parsedPrice = typeof price === "string" ? parseFloat(price.replace("$", "").trim()) : price;

    addItem({
      id, // Ensure id is a string
      productName: name,
      image: imageUrl,
      detail: category || "No category specified",
      quantity: 1,
      price: parsedPrice.toString()
    });
  };

  const product = {
    id: id.toString(), // Ensure id is a string
    image: imageUrl,
    name,
    productName: name,
    price: typeof price === "string" ? parseFloat(price.replace("$", "").trim()) : price,
    category,
    detail: category || "No category specified",
    quantity: 1,
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${id}`}>
        <div className="relative h-48 w-full overflow-hidden rounded-md">
          {imageUrl && imageUrl !== "/path/to/placeholder-image.jpg" ? (
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-white text-lg">
              No Image
            </div>
          )}
        </div>
      </Link>
      <div className="mt-4 text-center">
        <Link href={`/products/${id}`}>
          <h2 className="text-lg font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
            {name}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 mt-1">{category}</p>
        <p className="text-xl font-semibold text-gray-900 mt-2">${price}</p>

        <WishlistButton product={product} />
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
