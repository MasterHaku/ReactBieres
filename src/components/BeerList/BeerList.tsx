import React, { Component } from 'react';
import BeerForm from '../BeerForm/BeerForm';

interface Beer {
  name: string;
  type: string;
  rating: number;
}

interface BeerListState {
  beers: Beer[];
}

class BeerList extends Component<{}, BeerListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  handleAddBeer = (name: string, type: string, rating: number) => {
    this.setState((prevState) => ({
      beers: [...prevState.beers, { name, type, rating }]
    }));
  };

  handleDeleteBeer = (index: number) => {
    this.setState((prevState) => ({
      beers: prevState.beers.filter((_, i) => i !== index)
    }));
  };

  render() {
    const { beers } = this.state;
    return (
      <div className="flex flex-col items-center">
        <BeerForm onAddBeer={this.handleAddBeer} />

        {/* Tableau des bières */}
        <table className="table-auto mt-8 min-w-full text-center border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Rating</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {beers.map((beer, index) => (
              <tr key={index} className="bg-white">
                <td className="border px-4 py-2">{beer.name}</td>
                <td className="border px-4 py-2">{beer.type}</td>
                <td className="border px-4 py-2">{beer.rating}/5</td>
                <td className="border px-4 py-2">
                  <button 
                    onClick={() => this.handleDeleteBeer(index)} 
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default BeerList;
