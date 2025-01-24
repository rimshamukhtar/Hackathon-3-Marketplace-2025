import Link from "next/link";
import Image from "next/image";

const FindStore = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-white p-6">
        <h1 className="text-2xl font-bold mb-4">Find a Nike Store</h1>

        {/* Search Input */}
        <div className="relative mb-6">
          <label htmlFor="store-search" className="sr-only">
            Search Location
          </label>
          <input
            id="store-search"
            type="text"
            placeholder="Search Location"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />
          <Image
            src="/Search-icon.png"
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        <p className="text-sm mb-4 text-gray-600">15 Stores Near You</p>

        {/* Store List */}
        <ul className="space-y-6">
          {[
            {
              name: "Nike NYC - House of Innovation 000",
              address: "650 5th Ave.",
              city: "New York, NY, 10019, US",
              status: "Closed • Opens at 11:00 am",
            },
            {
              name: "Nike By Upper East Side",
              address: "1131 3rd Ave.",
              city: "New York, NY, 10065, US",
              status: "Closed • Opens at 11:00 am",
            },
            {
              name: "Nike By Flatiron",
              address: "156 Fifth Ave.",
              city: "New York, NY, 10010, US",
              status: "Closed • Opens at 11:00 am",
            },
          ].map((store, index) => (
            <li key={index} className="pb-4">
              <div className="flex flex-col">
                <h2 className="font-bold">{store.name}</h2>
                <p className="text-sm">{store.address}</p>
                <p className="text-sm">{store.city}</p>
                <p className="text-sm text-red-500">{store.status}</p>
              </div>
              {index < 2 && <div className="border-b border-gray-300 mt-4"></div>}
            </li>
          ))}
        </ul>

        {/* View All Stores Link */}
        <Link
          href="/all-stores"
          className="text-sm font-bold underline text-black mt-6 block hover:text-gray-700"
        >
          View All Stores
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-2/3">
        <Image
          src="/map.jpeg"
          alt="Map showing nearby Nike stores"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FindStore;
