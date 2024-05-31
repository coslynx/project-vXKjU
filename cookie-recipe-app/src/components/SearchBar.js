import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add logic to handle search functionality
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Search for recipes..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;