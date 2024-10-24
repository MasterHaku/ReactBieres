import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import BeerList from './components/BeerList/BeerList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
