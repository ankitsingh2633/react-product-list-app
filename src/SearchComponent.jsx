// SearchCategory.js
import React, { useState } from "react";

const SearchComponent = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <div>
      <input
        placeholder="search by name"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchComponent;
