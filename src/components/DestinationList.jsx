import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FavoriteButton from './FavoriteButton';

const DestinationList = () => {
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data);
                setFilteredCountries(data); // Initialize with all countries
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(query) ||
            (country.capital && country.capital[0].toLowerCase().includes(query))
        );
        setFilteredCountries(filtered);
    };

    // return (
        // <div>
        //     <h1>Destination List</h1>
        //     <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} />
        //     <ul>
        //         {filteredCountries.map(country => (
        //             <li key={country.cca3}>
        //                 <Link to={`/singlecountry/${country.cca3.toLowerCase()}`}>
        //                     {country.name.common}
        //                 </Link>
        //             </li>
        //         ))}
        //     </ul>
        // </div>);

        return (
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4 text-center">Destination List</h1>
                <SearchBar searchQuery={searchQuery} onSearchChange={handleSearch} />
                <ul className="mt-4 space-y-2">
                    {filteredCountries.map(country => (
                        <li key={country.cca3} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                            <Link to={`/singlecountry/${country.cca3.toLowerCase()}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                                {country.name.common}
                            </Link>
                              
                        </li>
                    ))}
                </ul>
            </div>
        );

};

export default DestinationList;