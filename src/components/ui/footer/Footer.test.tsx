import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('<Footer />', () => {
  test('render Footer', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
