import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center gap-3 p-6">
        <h1 className="font-bold text-xl">GET HELP</h1>
        <div className="relative">
          <input
            type="email"
            placeholder="What can we help you with?"
            className="w-64 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" aria-label="Search" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center mt-14 px-6">
        {/* FAQ Section */}
        <div className="w-full lg:w-[800px] flex flex-col gap-4 mb-10">
          <h1 className="text-xl font-semibold">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
          <p>We want to make buying your favorite Nike shoes and gear online fast and easy. We accept the following payment options:</p>
          <ul className="pl-8 list-disc">
            <li>Visa&lsquo; Mastercard&lsquo; Diners Club&lsquo; Discover&lsquo; American Express&lsquo; Visa Electron&lsquo; Maestro</li>
            <li>PayTM or local credit/debit cards (with PAN info)</li>
            <li>Apple Pay</li>
          </ul>
          <p>Nike Members can store multiple debit or credit cards for faster checkout. If you&apos;re not already a Member&lsquo; join us today.</p>
          <div className="flex gap-3">
            <button className="rounded-full w-28 h-9 bg-black text-white">JOIN US</button>
            <button className="rounded-full w-32 h-9 bg-black text-white">SHOP NIKE</button>
          </div>

          {/* FAQs */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">FAQs</h1>
            <div>
              <h2 className="font-semibold">Does my card need international purchases enabled?</h2>
              <p>Yes&lsquo; we recommend asking your bank to enable international purchases. Some banks may charge a small fee for international orders.</p>
            </div>
            <div>
              <h2 className="font-semibold">Can I pay for my order with multiple methods?</h2>
              <p>No&lsquo; payment for Nike orders cannot be split between multiple methods.</p>
            </div>
            <div>
              <h2 className="font-semibold">What payment method is accepted for SNKRS orders?</h2>
              <p>You can use any accepted credit card for your SNKRS order.</p>
            </div>
            <div>
              <h2 className="font-semibold">Why don&apos;t I see Apple Pay as an option?</h2>
              <p>
                To use Apple Pay on Nike.com&lsquo; you need a compatible Apple device running the latest OS&lsquo; signed in to iCloud&lsquo; with a supported card in your Wallet.
                Use Safari for Apple Pay on the web.
              </p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="flex items-center gap-2">
            <h1>Was this answer helpful?</h1>
            <button aria-label="Thumbs up">
              <Image src="/upthumb.png" alt="Thumbs up" className="h-[30px] w-[30px]" width={30} height={30} />
            </button>
            <button aria-label="Thumbs down">
              <Image src="/downthumb.png" alt="Thumbs down" className="h-[30px] w-[30px]" width={30} height={30} />
            </button>
          </div>

          {/* Related Links */}
          <div className="flex flex-col gap-4">
            <h1 className="text-gray-400">RELATED</h1>
            <a href="#" className="underline pl-10">
              WHAT ARE NIKE&apos;S DELIVERY OPTIONS?
            </a>
            <a href="#" className="underline pl-10">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-[314px] flex flex-col gap-3 border-l border-gray-300 px-4">
          <h1 className="font-bold text-xl text-center">CONTACT US</h1>
          <div className="flex flex-col gap-6">
            {[
              {
                src: "/phone.png",
                alt: "Phone icon",
                details: [
                  "000 800 919 0566",
                  "Products & Orders: 24/7",
                  "Company Info: 07:30 - 16:30, Mon-Fri",
                ],
              },
              {
                src: "/msg.png",
                alt: "Message icon",
                details: ["24 hours a day", "7 days a week"],
              },
              {
                src: "/mail.png",
                alt: "Mail icon",
                details: ["We'll reply within", "five business days"],
              },
              {
                src: "/location.png",
                alt: "Location icon",
                details: ["STORE LOCATOR", "Find Nike retail stores near you"],
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Image src={item.src} alt={item.alt} width={64} height={64} />
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-center">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
