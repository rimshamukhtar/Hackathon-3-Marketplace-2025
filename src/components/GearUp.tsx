import React from "react";

const GearUp = () => {
  return (
    <section className="px-4 sm:px-6 py-10 min-h-screen flex flex-col items-center">
      
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 w-full max-w-7xl text-left">Gear Up</h2>

      {/* Navigation Buttons for Men & Women */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full max-w-7xl space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg sm:text-xl font-medium">Shop Men's</h3>
          <button>
            <img src="/leftArrow.png" alt="Left Arrow" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button>
            <img src="/RightArrow.png" alt="Right Arrow" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg sm:text-xl font-medium">Shop Women's</h3>
          <button>
            <img src="/leftArrow.png" alt="Left Arrow" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <button>
            <img src="/RightArrow.png" alt="Right Arrow" className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 w-full max-w-7xl">
        
        {/* Product Cards */}
        {[
          { img: "/GearUp1.png", title: "Nike Dri-FIT ADV Techknit Ultra", desc: "Men's Short-Sleeve Running Top", price: "₹ 3,895" },
          { img: "/GearUp2.png", title: "Nike Dri-FIT Challenger", desc: "Men's 18cm (approx.) 2-in-1 Shorts", price: "₹ 2,495" },
          { img: "/GearUp3.png", title: "Nike Dri-FIT ADV Run Division", desc: "Women's Long-Sleeve Running Top", price: "₹ 5,295" },
          { img: "/GearUp4.png", title: "Nike Fast", desc: "Women's Mid-Rise Running Leggings", price: "₹ 3,795" },
        ].map((product, index) => (
          <div key={index} className="text-left">
            <img src={product.img} alt={product.title} className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover" />
            <h3 className="font-medium mt-4 text-lg sm:text-xl">{product.title}</h3>
            <p className="text-sm sm:text-md text-gray-500">{product.desc}</p>
            <p className="font-bold text-md sm:text-lg mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GearUp;