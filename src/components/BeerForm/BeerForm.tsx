import React, { Component, ChangeEvent, FormEvent } from 'react';

interface BeerFormProps {
  onAddBeer: (name: string, type: string) => void;
}

interface BeerFormState {
  name: string;
  type: string;
}

class BeerForm extends Component<BeerFormProps, BeerFormState> {
  constructor(props: BeerFormProps) {
    super(props);
    this.state = {
      name: '',
      type: '',
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<BeerFormState, keyof BeerFormState>);
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, type } = this.state;
    if (name && type) {
      this.props.onAddBeer(name, type);
      this.setState({ name: '', type: '' }); // Réinitialisation des champs du formulaire après soumission
    }
  };

  render() {
    const { name, type } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="mb-4 flex flex-col items-center space-y-4">
        <div className="mb-2">
          <label className="block text-sm font-medium text-center">
            Beer Name:
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={this.handleChange} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-center"
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-center">
            Beer Type:
            <input 
              type="text" 
              name="type" 
              value={type} 
              onChange={this.handleChange} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-center"
            />
          </label>
        </div>
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
