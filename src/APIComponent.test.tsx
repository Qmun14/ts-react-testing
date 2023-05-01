import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import APIComponent from './APIComponent';

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Qmun14" }))
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('gets the data', async () => {
  render(<APIComponent />);

  const out = await waitFor(() => screen.findByRole("contentinfo"));

  expect(out).toHaveTextContent('Qmun14');
});