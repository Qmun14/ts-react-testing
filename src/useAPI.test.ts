import { renderHook, waitFor } from "@testing-library/react";
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { useAPI } from "./useAPI";


const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Qmun14" }))
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('should output equal to {name : Qmun14}', async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() => expect(result.current).toEqual({ name: "Qmun14" }));

});
