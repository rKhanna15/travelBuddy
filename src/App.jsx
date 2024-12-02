import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DestinationList from './components/DestinationList';
import DestinationItem from './components/DestinationItem';
import About from './pages/About';
import ThemeToggle from './components/ThemeToggle';
import FavoriteCountriesList from './components/FavouriteConutriesList';
import Documentation from './pages/Documentation';

const App = () => {
  // return (
  //     <Router>
  //         <div className="App">
  //             <Navbar />
  //             <ThemeToggle />
  //             <Routes>
  //                 <Route path="/" element={<DestinationList />} />
  //                 <Route path="/about" element={<About />} />
  //             </Routes>
  //         </div>
  //     </Router>
  // );
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<DestinationList />} />
          <Route path="/singlecountry/:countryCode" element={<DestinationItem />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/favorites" element={<FavoriteCountriesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;