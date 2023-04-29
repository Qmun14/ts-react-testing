import { render, screen, fireEvent } from '@testing-library/react';
import ButtonWrapper from './ButtonWrapper';

test('handles onClick', () => {
  const onClick = jest.fn();                                        //? fungsi bawaan dari jest yang berjalan untuk melacak seberapa sering itu dipanggil dan dengan apa itu dipanggil
  render(<ButtonWrapper onClick={onClick} title='Add Item' />);
  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
