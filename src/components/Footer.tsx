import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
   
        <div>
          <ul className="space-y-2">
            <li className="text-white font-semibold">FIND A STORE</li>
            <li>BECOME A MEMBER</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>SEND US FEEDBACK</li>
            <li>STUDENT DISCOUNTS</li>
          </ul>
        </div>

    
        <div>
          <ul className="space-y-2">
            <li className="text-white font-semibold">GET HELP</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>

      
        <div>
          <ul className="space-y-2">
            <li className="text-white font-semibold">ABOUT NIKE</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
     
          <div className="flex space-x-4 text-lg">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-700 flex justify-between ">
        <div className="flex gap-4">
      <div className="flex items-center text-white">
            <IoLocationSharp className="mr-2" />
            India
          </div>
          <p className="text-sm text-gray-400 ">
            © 2023 Nike, Inc. All Rights Reserved
          </p>
          </div>
        <ul className="flex justify-center space-x-8 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Guides
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Sale
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Nike Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
