import { render, screen } from '@testing-library/react';
import App from './App';
import ToSignup from './ToSignup';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
