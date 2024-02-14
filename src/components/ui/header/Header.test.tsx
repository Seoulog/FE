import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('render Header', () => {
  render(<Header />);
  const logoEl = screen.getByText(/Seoulog/i);
  const buttonEl = screen.getByText(/이용하러 가기/i);

  expect(logoEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});
