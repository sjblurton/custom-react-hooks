import useToggle from "./use-toggle";
import { renderHook, act } from "@testing-library/react-hooks";

test("should init with false", () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current[0]).toBe(false);
});

test("should init with true", () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current[0]).toBe(true);
});

test("should toggle to true from false", () => {
  const { result } = renderHook(() => useToggle());
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);
});

test("should set to true", () => {
  const { result } = renderHook(() => useToggle());
  act(() => {
    result.current[1](true);
  });
  expect(result.current[0]).toBe(true);
});

test("should set to false", () => {
  const { result } = renderHook(() => useToggle(true));
  act(() => {
    result.current[1](false);
  });
  expect(result.current[0]).toBe(false);
});
