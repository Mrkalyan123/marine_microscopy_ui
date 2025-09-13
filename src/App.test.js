import { render, screen } from '@testing-library/react';
import App from './App';

test('renders marine biodiversity app', () => {
  render(<App />);
  const linkElement = screen.getByText(/PlanktonAI/i);
  expect(linkElement).toBeInTheDocument();
});