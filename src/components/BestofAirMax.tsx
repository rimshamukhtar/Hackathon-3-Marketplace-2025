

export default function BestOfAirMax() {
    const products = [
      {
        id: 1,
        name: "Nike Air Max Pulse",
        price: "₹ 13,995",
        category: "Women's Shoes",
        image: "/Bestairmaxshoes1.png",
      },
      {
        id: 2,
        name: "Nike Air Max Pulse",
        price: "₹ 13,995",
        category: "Men's Shoes",
        image: "/Bestairmaxshoes2.png",
      },
      {
        id: 3,
        name: "Nike Air Max 97 SE",
        price: "₹ 16,995",
        category: "Men's Shoes",
        image: "/Bestairmaxshoes3.png",
      },
    ];
  
    return (
      <section className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
        
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Best of Air Max</h2>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:underline">Shop</button>
           
              <div className="flex items-center space-x-2">
                <img
                  src="/leftArrow.png"
                  alt="Left Arrow"
                  className="h-8 w-8 cursor-pointer"
                />
                <img
                  src="/RightArrow.png"
                  alt="Right Arrow"
                  className="h-8 w-8 cursor-pointer"
                />
              </div>
            </div>
          </div>
  
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
           
                <div className="w-full h-[300px] overflow-hidden border rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
             
                <div className="mt-4 text-left w-full">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-gray-800 font-semibold">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }