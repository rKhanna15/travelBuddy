// FavoriteButton.js
import React from 'react';

const FavoriteButton = ({ countryId, isFavorited, onToggleFavorite }) => {
    return (
        <button 
            onClick={onToggleFavorite} 
            className={`px-4 py-2 rounded-lg transition duration-300 
                ${isFavorited ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}
                hover:bg-opacity-80 focus:outline-none`}
        >
            {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};

export default FavoriteButton;