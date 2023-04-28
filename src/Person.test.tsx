import { render, screen } from '@testing-library/react';
import Person from './Person';

test('renders a name', () => {
  render(<Person name='Qmun14' />);
  // const linkElement = screen.getByText(/Name is : Qmun14/i);
  // expect(linkElement).toBeInTheDocument();
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is : Qmun14");
  expect(divElement).toHaveAttribute("role", "contentinfo");

});
