import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

const sizes = {
  sm: 18,
  md: 24,
  lg: 30,
  xl: 44
};

describe('<Logo />', () => {
  test('render Logo', () => {
    render(<Logo />);
    const logoEl = screen.getByText(/Seoulog/i);
    expect(logoEl).toHaveClass('font-inknut');
  });

  test('check Logo anchorTag href', () => {
    render(<Logo />);
    const logoElAnchor = screen.getByText(/Seoulog/i).closest('a');
    expect(logoElAnchor).toHaveAttribute('href', '/');
  });

  test('render Logo with Korean', () => {
    render(<Logo withKorean />);
    const logoEl = screen.getByText(/Seoulog/i);
    expect(logoEl).toHaveTextContent('Seoulog | 서울로그');
  });

  test('render with size props', () => {
    for (const size of Object.keys(sizes)) {
      render(<Logo size={size as keyof typeof sizes} />);
      const logoEl = screen.getByText(/Seoulog/i);
      expect(logoEl).toHaveClass(
        `text-[${sizes[size as keyof typeof sizes]}px]`
      );
      cleanup();
    }
  });
});
