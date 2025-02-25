'use client';
import { useState } from 'react';
import Image from 'next/image';
import deliver from '../../../public/Assets/deliver.png';
import order from '../../../public/Assets/order.png';
import { useCart } from '../Context/CartContext';
import ContactInfo from '../../components/ContactInfo';

export default function Checkout() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { items, clearCart } = useCart();

  // Calculate subtotal safely
  const subtotal = items.reduce((total, item) => {
    const price = typeof item.price === 'number'
      ? item.price
      : parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + price * item.quantity;
  }, 0);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsConfirmed(true);
    clearCart();
  };

  if (isConfirmed) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] mt-6">
        <div className="text-center">
          <div className="flex flex-col justify-center items-center mb-4">
            <Image src={order} alt="Order Confirmed" width={40} height={40} />
          </div>
          <h1 className="text-2xl font-bold mb-4">Your order is confirmed!</h1>
          <p className="text-gray-600">Thank you for shopping with us.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
          {/* Left Section */}
          <div className="lg:w-2/3 xl:w-3/5">
            <div>
              <h1 className="font-medium text-[16px]">
                How would you like to get your order?
              </h1>
              <p className="font-light text-[14px]">
                Customs regulation for India requires a copy of the recipient's KYC. 
                The address on the KYC needs to match the shipping address. Our courier will 
                contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored 
                securely and used solely for clearing customs. 
                <a href="#" className="text-blue-500 underline ml-1">Learn More</a>
              </p>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
              <div className="flex gap-4 w-[250px] h-[50px] border border-black rounded-md justify-start items-center p-4">
                <Image src={deliver} alt="Deliver Option" width={16} height={16} />
                <p className="font-medium text-[12px]">Deliver It</p>
              </div>
            </div>

            <h1 className="text-[16px] font-medium mt-2 text-center">
              Enter your name and address:
            </h1>

            <div className="mt-4 flex flex-col gap-4">
              <label>
                <input
                  type="text"
                  className="w-full h-[50px] border border-gray-400 rounded-md p-2 text-[14px]"
                  placeholder="First Name"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  className="w-full h-[50px] border border-gray-400 rounded-md p-2 text-[14px]"
                  placeholder="Last Name"
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  className="w-full h-[50px] border border-gray-400 rounded-md p-2 text-[14px]"
                  placeholder="Address Line 1"
                  required
                />
              </label>
              <input
                type="text"
                className="w-full h-[50px] border border-gray-400 rounded-md p-2 text-[14px]"
                placeholder="Address Line 2"
              />
              <div className="flex gap-4">
                <label>
                  <input
                    type="text"
                    className="w-full lg:w-1/2 h-[50px] border border-gray-400 rounded-md p-2 text-[14px]"
                    placeholder="Postal Code"
                    required
                  />
                </label>
                <input
                  type="text"
                  className="w-full lg:w-1/2 h-[50px] border border-gray-400 rounded-md p-2 text-[14px]"
                  placeholder="Locality"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="w-full h-[50px] p-2 border rounded-md text-[14px]"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select State/Territory</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Baluchistan">Baluchistan</option>
                  <option value="KPK">KPK</option>
                </select>
                <input
                  type="text"
                  value="Pakistan"
                  className="w-full h-[50px] p-2 border rounded-md"
                  disabled
                />
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <label className="flex items-center text-[14px] text-[#757575]">
                <input type="checkbox" className="mr-2" required />
                Save this address to my profile
              </label>
              <label className="flex items-center text-[14px] text-[#757575]">
                <input type="checkbox" className="mr-2" required />
                Make this my preferred address
              </label>
            </div>

            <ContactInfo />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/3 xl:w-2/5 border-t lg:border-t-0 lg:border-l pl-0 lg:pl-4">
            <div className="mt-4">
              <h1 className="text-[18px] font-medium text-center mb-4">
                Order Summary
              </h1>
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-[#8D8D8D] font-normal text-[14px]">Subtotal</p>
                  <p className="text-[#8D8D8D] font-normal text-[14px]">₹ {subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-[#8D8D8D] font-normal text-[14px]">Delivery/Shipping</p>
                  <p className="text-[#8D8D8D] font-normal text-[14px]">Free</p>
                </div>
                <div className="flex justify-between items-center border-t border-b border-gray-400 mt-4 py-2">
                  <p className="text-black font-medium text-[14px]">Total</p>
                  <p className="text-black font-medium text-[14px]">₹ {subtotal.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="text-[14px] font-bold text-center">
                Arrives in 5-7 business days
              </h1>
              {items.map((item, index) => (
                <div key={index} className="flex gap-4 mt-4">
                  <Image
                    src={item.image || '/placeholder.png'}
                    alt={item.productName}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px]"
                  />
                  <div>
                    <p className="text-[12px] font-medium">{item.productName}</p>
                    <p className="text-[12px] mt-1">Qty {item.quantity}</p>
                    <p className="text-[12px] font-bold mt-1">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
