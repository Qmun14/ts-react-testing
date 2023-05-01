import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./userCounter";

test('should increment', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);

})
