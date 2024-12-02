import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FavoriteCountriesList = () => {
    const [favorites, setFavorites] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);

        // Fetch country data for favorites
        const fetchFavoriteCountries = async () => {
            const fetchedCountries = await Promise.all(
                storedFavorites.map(code =>
                    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                        .then(response => response.json())
                        .then(data => data[0])
                )
            );
            setCountries(fetchedCountries);
        };

        if (storedFavorites.length > 0) {
            fetchFavoriteCountries();
        }
    }, []);

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Favorite Countries</h1>
                <ul className="space-y-2">
                    {countries.length > 0 ? (
                        countries.map(country => (
                            <li key={country.cca3} className="bg-gray-100 rounded-lg p-4 shadow-sm transition duration-300 hover:bg-gray-200">
                                <Link to={`/singlecountry/${country.cca3.toLowerCase()}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                                    {country.name.common}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li className="text-center text-gray-800">No favorite countries found.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FavoriteCountriesList;