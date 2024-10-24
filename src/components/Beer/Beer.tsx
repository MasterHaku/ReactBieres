import React, { Component } from 'react';

// Interface pour les props du composant Beer
interface BeerProps {
  name: string;
  type: string;
}

class Beer extends Component<BeerProps> {
  render() {
    const { name, type } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>Type: {type}</p>
      </div>
    );
  }
}

export default Beer;