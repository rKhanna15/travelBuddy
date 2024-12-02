import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
        <button
        
            onClick={toggleTheme}
            className={`px-4 py-2 rounded transition duration-300 mx-0.5
                ${theme ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}
                hover:opacity-80 focus:outline-none`}
        >
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    );
};

export default ThemeToggle;