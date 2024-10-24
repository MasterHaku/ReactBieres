import React, { Component } from 'react';
import BeerForm from '../BeerForm/BeerForm'; // Assurez-vous que le chemin est correct

interface Beer {
  name: string;
  type: string;
}

interface BeerListState {
  beers: Beer[];
}

export default class BeerList extends Component<{}, BeerListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      beers: [
        { name: 'Guinness', type: 'Stout' },
        { name: 'Heineken', type: 'Lager' },
        { name: 'Sierra Nevada', type: 'IPA' },
      ],
    };
  }

  addBeer = (name: string, type: string) => {
    this.setState((prevState) => ({
      beers: [...prevState.beers, { name, type }],
    }));
  };

  deleteBeer = (index: number) => {
    this.setState((prevState) => ({
      beers: prevState.beers.filter((_, i) => i !== index),
    }));
  };

  render() {
    const { beers } = this.state;

    return (
      <div className="flex flex-col items-center p-4">
        

        {/* Formulaire centré */}
        <BeerForm onAddBeer={this.addBeer} />

        

        {/* Tableau de bières centré */}
        <div className="flex flex-col w-full max-w-md mt-8 items-center">
        <h1 className="text-2xl font-bold mb-4">Toutes nos bières</h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 items-center">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {beers.map((beer, index) => (
                <tr key={index} className="hover:bg-gray-100 items-center">
                  <td className="py-2 px-4 border">{beer.name}</td>
                  <td className="py-2 px-4 border">{beer.type}</td>
                  <td className="py-2 px-4 border">
                    <button 
                      onClick={() => this.deleteBeer(index)} 
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
