import React from 'react';
import BeerList from './components/BeerList/BeerList';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Beer App</h1>
      <BeerList />
    </div>
  );
}

export default App;
