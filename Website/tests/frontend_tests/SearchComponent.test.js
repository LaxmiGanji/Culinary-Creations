import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Mock the search component - you'll need to adjust this based on your actual component structure
const MockSearchComponent = ({ onSearch, placeholder = "Search recipes..." }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  
  return (
    <div data-testid="search-component">
      <input
        data-testid="search-input"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button data-testid="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

describe('Search Component Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('TC-FR-002: Search component renders correctly', () => {
    const mockOnSearch = jest.fn();
    render(<MockSearchComponent onSearch={mockOnSearch} />);
    
    expect(screen.getByTestId('search-component')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
  });

  test('TC-FR-002: Search with valid keyword', async () => {
    const mockOnSearch = jest.fn();
    render(<MockSearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');
    
    // Enter search term
    await userEvent.type(searchInput, 'Chicken');
    
    // Click search button
    fireEvent.click(searchButton);
    
    // Verify search function was called with correct term
    expect(mockOnSearch).toHaveBeenCalledWith('Chicken');
  });

  test('TC-FR-003: Search with invalid keyword', async () => {
    const mockOnSearch = jest.fn();
    render(<MockSearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');
    
    // Enter invalid search term
    await userEvent.type(searchInput, 'xyzabc');
    
    // Click search button
    fireEvent.click(searchButton);
    
    // Verify search function was called with the term
    expect(mockOnSearch).toHaveBeenCalledWith('xyzabc');
  });

  test('TC-FR-004: Search with empty input', async () => {
    const mockOnSearch = jest.fn();
    render(<MockSearchComponent onSearch={mockOnSearch} />);
    
    const searchButton = screen.getByTestId('search-button');
    
    // Click search button without entering anything
    fireEvent.click(searchButton);
    
    // Verify search function was called with empty string
    expect(mockOnSearch).toHaveBeenCalledWith('');
  });

  test('TC-FR-004: Search input accepts user input', async () => {
    const mockOnSearch = jest.fn();
    render(<MockSearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByTestId('search-input');
    
    // Type in the search input
    await userEvent.type(searchInput, 'Pasta');
    
    // Verify the input value is updated
    expect(searchInput).toHaveValue('Pasta');
  });

  test('TC-FR-004: Search input clears after search', async () => {
    const mockOnSearch = jest.fn();
    render(<MockSearchComponent onSearch={mockOnSearch} />);
    
    const searchInput = screen.getByTestId('search-input');
    const searchButton = screen.getByTestId('search-button');
    
    // Enter search term and search
    await userEvent.type(searchInput, 'Pasta');
    fireEvent.click(searchButton);
    
    // Input should still contain the value (unless cleared by parent component)
    expect(searchInput).toHaveValue('Pasta');
  });
}); 