import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for products..."
        className="border p-2 rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white p-2 rounded-r-md hover:bg-gray-800 transition-colors duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
