import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton'; // The new FavoriteButton component
import { ThemeContext } from '../context/ThemeContext'; // Import the ThemeContext

const DestinationItem = () => {
    const { countryCode } = useParams();
    const [country, setCountry] = useState(null);
    const [isFavorited, setIsFavorited] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use the theme context

    useEffect(() => {
        const fetchCountry = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            const data = await response.json();
            setCountry(data[0]);
        };

        fetchCountry();

        // Check if the country is favorited
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorited(storedFavorites.includes(countryCode));
    }, [countryCode]);

    const toggleFavorite = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const updatedFavorites = isFavorited
            ? storedFavorites.filter(id => id !== countryCode)
            : [...storedFavorites, countryCode];

        setIsFavorited(!isFavorited);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    if (!country) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    return (
        <div className={`container mx-auto p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h1 className={`text-3xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {country.name.common}
            </h1>
            <img 
                src={country.flags.svg} 
                alt={`${country.name.common} flag`} 
                className="w-1/2 mx-auto mb-4 rounded"
            />
            <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                <p className="mb-2"><strong>Capital:</strong> {country.capital}</p>
                <p className="mb-2"><strong>Region:</strong> {country.region}</p>
                <p className="mb-2"><strong>Subregion:</strong> {country.subregion}</p>
                <p className="mb-2"><strong>Population:</strong> {country.population.toLocaleString()}</p>
            </div>
            <div className="mt-4">
                <FavoriteButton 
                    countryId={country.cca3} 
                    isFavorited={isFavorited} 
                    onToggleFavorite={toggleFavorite} 
                />
            </div>
        </div>);
}

export default DestinationItem;