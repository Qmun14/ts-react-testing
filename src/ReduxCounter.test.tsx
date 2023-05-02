
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import { ReduxCounter } from './ReduxCounter';
import { store } from './store';

test('should increment', () => {
  render(<Provider store={store}><ReduxCounter /></Provider>);

  const counter = screen.getByRole('contentinfo');
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
})