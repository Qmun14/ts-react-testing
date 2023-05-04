
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'
import { ReduxCounter } from './ReduxCounter';
import { store } from './store';

describe("Redux increment decrement test", () => {

  test('should increment', () => {
    render(<Provider store={store}><ReduxCounter /></Provider>);

    const counter = screen.getByRole('contentinfo');
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByLabelText('Increment value');
    fireEvent.click(addButton);


    expect(counter).toHaveTextContent("1");
  })

  test('should decrement', () => {
    render(<Provider store={store}><ReduxCounter /></Provider>);

    const counter = screen.getByRole('contentinfo');
    expect(counter).toHaveTextContent("1");

    const decButton = screen.getByText(/Decrement/i);
    fireEvent.click(decButton);

    expect(counter).toHaveTextContent("0");
  })

  test('should increment by amount', () => {
    render(<Provider store={store}><ReduxCounter /></Provider>);

    const counter = screen.getByLabelText('amount value', { exact: true });
    expect(counter).toHaveTextContent("10");

    const increment = screen.getByText("Increment By Amount");
    fireEvent.click(increment);

    const incrementByAmount = screen.getByLabelText('amount counter');
    expect(incrementByAmount).toHaveTextContent("10");
  })


})
