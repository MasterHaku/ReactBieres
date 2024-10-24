import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import About from './components/About/About'; // Assurez-vous que le chemin est correct

class App extends Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen flex flex-col justify-between bg-gray-100 p-4">
          {/* Titre */}
          <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Beer App</h1>
          
          {/* Contenu principal */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<BeerList />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>

          {/* Barre de navigation en bas */}
          <nav className="flex justify-center space-x-4 mb-4">
            <Link 
              to="/" 
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-200"
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
