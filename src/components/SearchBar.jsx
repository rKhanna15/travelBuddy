import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={onSearchChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-500"
        />
    );
};

export default SearchBar;