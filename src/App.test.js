import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Advanced Calculator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Advanced Calculator/i);
  expect(headingElement).toBeInTheDocument();
});
