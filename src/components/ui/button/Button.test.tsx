import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('<Button />', () => {
  test('render Button', () => {
    render(<Button>이용하러 가기</Button>);
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toHaveClass('hover:-translate-y-0.5');
  });

  test('onClick event', () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>이용하러 가기</Button>);

    const buttonEl = screen.getByRole('button');

    buttonEl.click();
    expect(mockOnClick).toBeCalled();
  });
});
