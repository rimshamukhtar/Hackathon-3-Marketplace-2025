import React from "react";

const GearUp = () => {
  return (
    <section className="px-6 py-10 min-h-screen flex flex-col items-center">
   
      <h2 className="text-4xl font-semibold mb-6 w-full max-w-8xl text-left">Gear Up</h2>

      <div className="flex justify-between items-center mb-6 w-full max-w-6xl">
        <div className="flex justify-items-start space-x-2">
          <h3 className="text-xl font-medium">Shop Men's</h3>
          <button>
            <img src="/leftArrow.png" alt="Left Arrow" className="w-10 h-10" />
          </button>
          <button>
            <img src="/RightArrow.png" alt="Right Arrow" className="w-10 h-10" />
          </button>
        </div>
        <div className="flex justify-items-end space-x-2">
          <h3 className="text-xl font-medium">Shop Women's</h3>
          <button>
            <img src="/leftArrow.png" alt="Left Arrow" className="w-10 h-10" />
          </button>
          <button>
            <img src="/RightArrow.png" alt="Right Arrow" className="w-10 h-10" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-7xl">
       
        <div className="text-left">
          <img src="/GearUp1.png" alt="Men's Product 1" className="w-full h-[350px] object-cover" />
          <h3 className="font-medium mt-4 text-xl">Nike Dri-FIT ADV Techknit Ultra</h3>
          <p className="text-md text-gray-500">Men's Short-Sleeve Running Top</p>
          <p className="font-bold text-lg mt-2">₹ 3,895</p>
        </div>

        <div className="text-left">
          <img src="/GearUp2.png" alt="Men's Product 2" className="w-full h-[350px] object-cover" />
          <h3 className="font-medium mt-4 text-xl">Nike Dri-FIT Challenger</h3>
          <p className="text-md text-gray-500">Men's 18cm (approx.) 2-in-1 Shorts</p>
          <p className="font-bold text-lg mt-2">₹ 2,495</p>
        </div>

      
        <div className="text-left">
          <img src="/GearUp3.png" alt="Women's Product 1" className="w-full h-[350px] object-cover" />
          <h3 className="font-medium mt-4 text-xl">Nike Dri-FIT ADV Run Division</h3>
          <p className="text-md text-gray-500">Women's Long-Sleeve Running Top</p>
          <p className="font-bold text-lg mt-2">₹ 5,295</p>
        </div>

      
        <div className="text-left">
          <img src="/GearUp4.png" alt="Women's Product 2" className="w-full h-[350px] object-cover" />
          <h3 className="font-medium mt-4 text-xl">Nike Fast</h3>
          <p className="text-md text-gray-500">Women's Mid-Rise Running Leggings</p>
          <p className="font-bold text-lg mt-2">₹ 3,795</p>
        </div>
      </div>
    </section>
  );
};

export default GearUp;