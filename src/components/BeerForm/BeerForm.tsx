import React, { Component, ChangeEvent, FormEvent } from 'react';

interface BeerFormProps {
  onAddBeer: (name: string, type: string, rating: number) => void;
}

interface BeerFormState {
  name: string;
  type: string;
  rating: number;
}

class BeerForm extends Component<BeerFormProps, BeerFormState> {
  constructor(props: BeerFormProps) {
    super(props);
    this.state = {
      name: '',
      type: '',
      rating: 0,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Conversion explicite des valeurs de type string à leur type correct
    this.setState({ 
      [name]: value 
    } as unknown as Pick<BeerFormState, keyof BeerFormState>);
  };

  handleRatingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ rating: Number(e.target.value) });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, type, rating } = this.state;
    if (name && type && rating) {
      this.props.onAddBeer(name, type, rating);
      this.setState({ name: '', type: '', rating: 0 }); // Réinitialisation après soumission
    }
  };

  render() {
    const { name, type, rating } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="flex flex-col items-center space-y-4">
        {/* Champs de formulaire */}
        <div className="flex space-x-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-center">
              <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={this.handleChange} 
                required 
                placeholder='Beer Name'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-center"
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-center">
              <input 
                type="text" 
                name="type" 
                value={type} 
                onChange={this.handleChange} 
                required 
                placeholder='Beer Type'
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-center"
              />
            </label>
          </div>
        </div>
        
        {/* Sélecteur pour la note */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-center">
            Rating (out of 5):
            <select 
              name="rating" 
              value={rating} 
              onChange={this.handleRatingChange} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-center"
            >
              <option value="0">Select rating</option>
              {[1, 2, 3, 4, 5].map((ratingValue) => (
                <option key={ratingValue} value={ratingValue}>{ratingValue}</option>
              ))}
            </select>
          </label>
        </div>
        
        {/* Bouton d'ajout */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Beer
        </button>
      </form>
    );
  }
}

export default BeerForm;
