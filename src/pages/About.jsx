import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">About This App</h1>
                    <p className="text-lg text-gray-800 mb-4">
                    This application provides information about various countries around the world. 
                    You can search for a country by name and view details such as its capital, region, population, and flag.
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    The app also allows you to favorite countries for quick access later. 
                    Whether you are a geography enthusiast or just curious about the world, this app is designed to provide you with the information you need.
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    Built with React and styled with Tailwind CSS, this app aims to offer a clean and responsive user interface.
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    We hope you enjoy exploring the countries and learning more about our beautiful planet!
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6 my-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Mission Statement</h2>
                <p className="text-lg text-gray-800 mb-4">
                    Our mission is to empower users with knowledge about the world's countries, 
                    fostering curiosity and understanding of global cultures, geography, and diversity.
                </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Features</h2>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li>Search for countries by name or capital.</li>
                    <li>View detailed information about each country, including population, area, and region.</li>
                    <li>Favorite countries for quick access later.</li>
                    <li>Responsive design that works on various devices.</li>
                    <li>Light and dark mode support for better accessibility.</li>
                </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Technologies Used</h2>
                <p className="text-lg text-gray-800 mb-4">
                    This application is built using the following technologies:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
                    <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for styling.</li>
                    <li><strong>React Router:</strong> A library for routing in React applications.</li>
                    <li><strong>REST API:</strong> Fetching country data from the REST Countries API.</li>
                </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Future Plans</h2>
                <p className="text-lg text-gray-800 mb-4">
                    We have exciting plans for future updates, including:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-800">
                    <li>Adding more detailed statistics and charts for each country.</li>
                    <li>Implementing user authentication for saving favorite countries across devices.</li>
                    <li>Enhancing the search functionality with filters for region, population, and area.</li>
                    <li>Creating a blog section for sharing interesting facts and articles about countries.</li>
                </ul>
            </div>

            </div>
        
    );
};

export default About;