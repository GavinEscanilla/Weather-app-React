import React, { useState } from "react";
import Display from "./Display";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input type="text" className="p-2 border border-gray-300 rounded-md" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />
      <Display searchTerm={searchTerm} />
    </div>
  );
};

export default SearchBar;
