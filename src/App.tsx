import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import About from './components/About/About'; // Assurez-vous que le chemin est correct

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex flex-col justify-between min-h-screen p-4 bg-gray-100">
          {/* Titre */}
          <h1 className="mb-8 text-3xl font-bold text-center">Welcome to the best Beer App of all beer apps on the market</h1>
          
          {/* Contenu principal */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<BeerList />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          {/* Barre de navigation en bas */}
          <nav className="flex justify-center mb-4 space-x-4">
            <Link 
              to="/" 
              className="px-6 py-2 font-bold text-white transition-colors duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-2 font-bold text-white transition-colors duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              About
            </Link>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
