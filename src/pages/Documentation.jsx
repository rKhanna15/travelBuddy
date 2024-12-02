import React from 'react';

const Documentation = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Documentation</h1>

                <h2 className="text-3xl font-semibold mb-4 text-gray-800">How to Use This Site</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to our country information application! Here’s how to navigate and use the site:
                </p>
                <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2">
                    <li>
                        <strong>Search for a Country:</strong> Use the search bar on the homepage to find a country by name or capital.
                    </li>
                    <li>
                        <strong>View Country Details:</strong> Click on a country from the search results to view detailed information, including its capital, region, population, and flag.
                    </li>
                    <li>
                        <strong>Favorite Countries:</strong> Click the heart icon on a country’s detail page to add it to your favorites for quick access later.
                    </li>
                    <li>
                        <strong>Access Favorites:</strong> Navigate to the "Favorite Countries" page to view all your saved countries.
                    </li>
                    <li>
                        <strong>Responsive Design:</strong> The site is designed to work on various devices, including desktops, tablets, and smartphones.
                    </li>
                </ol>

                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Features</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
                    <li>Search for countries by name or capital.</li>
                    <li>View detailed information about each country.</li>
                    <li>Favorite countries for quick access later.</li>
                    <li>Responsive design for various devices.</li>
                    <li>Light and dark mode support.</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Proud Implementations</h2>
                <p className="text-lg text-gray-700 mb-4">
                    One of the features I am particularly proud of is the <strong>Favorites functionality</strong>. 
                    This allows users to save their favorite countries and access them easily from a dedicated page. 
                    You can check it out <a href="/favorites" className="text-blue-600 underline hover:text-blue-800 transition duration-200">here</a>.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Building and Running the Project</h2>
                <p className="text-lg text-gray-700 mb-4">
                    To build and run this project locally, follow these steps:
                </p>
                <ol className="list-decimal list-inside text-lg text-gray-700 mb-6 space-y-2">
                    <li>Clone the repository from GitHub:</li>
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800"><code>git clone <a href="https://github.com/rKhanna15/travelBuddy.git">https://github.com/rKhanna15/travelBuddy.git</a></code></pre>
                    <li>Navigate to the project directory:</li>
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800"><code>cd travelBuddy</code></pre>
                    <li>Install the dependencies:</li>
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800"><code>npm install</code></pre>
                    <li>Start the development server:</li>
                    <pre className="bg-gray-100 p-4 rounded-md text-gray-800"><code>npm run dev</code></pre>
                </ol>
                <p className="text-lg text-gray-700 mb-4">
                    The application should now be running on <strong>http://localhost:5174</strong>.
                </p>
            </div>
        </div>
    );
};

export default Documentation;