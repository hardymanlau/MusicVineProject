import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItineraryForm from '../components/Itinerary/ItineraryForm';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

test('renders ItineraryForm component', () => {
  render(<ItineraryForm />);
  expect(screen.getByText('Travel Itinerary')).toBeInTheDocument();
});

test('add a new day', () => {
  render(<ItineraryForm />);
  
  // Find the "Add Day" button and click it
  const addDayButton = screen.getByText('Add Day');
  fireEvent.click(addDayButton);

  // Verify that has been added
  expect(screen.getByText('Day 2')).toBeInTheDocument();
});

test('delete the last day', () => {
  render(<ItineraryForm />);
  
  const lastDayDeleteButton = screen.getAllByText('Delete Day').pop();
  fireEvent.click(lastDayDeleteButton);

  // Verify that the last day has been deleted
  expect(screen.queryByText(`Day ${screen.getAllByText('Delete Day').length + 1}`)).not.toBeInTheDocument();
});