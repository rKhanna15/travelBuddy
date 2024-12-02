// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/favorites">Favorites</Link>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">TravelBuddy</div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
                <div className={`flex-col md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                    <Link to="/" className="block md:inline-block px-4 py-2">Home</Link>
                    <Link to="/favorites" className="block md:inline-block px-4 py-2">Favorites</Link>
                    <Link to="/about" className="block md:inline-block px-4 py-2">About</Link>
                    <Link to="/documentation" className="block md:inline-block px-4 py-2">Documentation</Link>
                    <ThemeToggle/>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;