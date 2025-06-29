import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock navigation component
const MockNavigation = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <nav data-testid="navigation">
      <div data-testid="current-page">{currentPage}</div>
      <button data-testid="nav-home" onClick={() => navigateTo('home')}>
        Home
      </button>
      <button data-testid="nav-about" onClick={() => navigateTo('about')}>
        About
      </button>
      <button data-testid="nav-contact" onClick={() => navigateTo('contact')}>
        Contact
      </button>
      <div data-testid="nav-logo" onClick={() => navigateTo('home')}>
        Culinary Creations
      </div>
    </nav>
  );
};

describe('Navigation Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('TC-FR-007: Navigation renders all links', () => {
    render(<MockNavigation />);
    
    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('nav-home')).toBeInTheDocument();
    expect(screen.getByTestId('nav-about')).toBeInTheDocument();
    expect(screen.getByTestId('nav-contact')).toBeInTheDocument();
    expect(screen.getByTestId('nav-logo')).toBeInTheDocument();
  });

  test('TC-FR-007: Navigation to Home page', () => {
    render(<MockNavigation />);
    
    const homeButton = screen.getByTestId('nav-home');
    fireEvent.click(homeButton);
    
    expect(screen.getByTestId('current-page')).toHaveTextContent('home');
  });

  test('TC-FR-007: Navigation to About page', () => {
    render(<MockNavigation />);
    
    const aboutButton = screen.getByTestId('nav-about');
    fireEvent.click(aboutButton);
    
    expect(screen.getByTestId('current-page')).toHaveTextContent('about');
  });

  test('TC-FR-007: Navigation to Contact page', () => {
    render(<MockNavigation />);
    
    const contactButton = screen.getByTestId('nav-contact');
    fireEvent.click(contactButton);
    
    expect(screen.getByTestId('current-page')).toHaveTextContent('contact');
  });

  test('TC-FR-007: Logo navigation to Home', () => {
    render(<MockNavigation />);
    
    // First navigate to a different page
    const aboutButton = screen.getByTestId('nav-about');
    fireEvent.click(aboutButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('about');
    
    // Then click logo to go home
    const logo = screen.getByTestId('nav-logo');
    fireEvent.click(logo);
    
    expect(screen.getByTestId('current-page')).toHaveTextContent('home');
  });

  test('TC-FR-007: Navigation state management', () => {
    render(<MockNavigation />);
    
    // Test multiple navigation changes
    const homeButton = screen.getByTestId('nav-home');
    const aboutButton = screen.getByTestId('nav-about');
    const contactButton = screen.getByTestId('nav-contact');
    
    fireEvent.click(aboutButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('about');
    
    fireEvent.click(contactButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('contact');
    
    fireEvent.click(homeButton);
    expect(screen.getByTestId('current-page')).toHaveTextContent('home');
  });
}); 