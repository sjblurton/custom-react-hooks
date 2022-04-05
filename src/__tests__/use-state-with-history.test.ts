import { useStateWithHistory } from "../hooks/";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useStateWithHistory testing", () => {
  const INIT_VALUE = 0;
  const UPDATE_VALUE = 1;
  const UPDATE_ARRAY = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const CAPACITY = 5;

  it("should init the state with a value of 1.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    expect(result.current[0]).toBe(INIT_VALUE);
  });

  it("should update the state value.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    act(() => {
      result.current[1](UPDATE_VALUE);
    });
    expect(result.current[0]).toBe(UPDATE_VALUE);
  });

  it("should store history in an array.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    act(() => {
      result.current[1](UPDATE_VALUE);
    });
    expect(result.current[2].history.length).toBe(2);
  });

  it("should move back though history.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    act(() => {
      result.current[1](UPDATE_VALUE);
      result.current[2].back();
    });
    expect(result.current[0]).toBe(INIT_VALUE);
  });

  it("should move forward though history.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    act(() => {
      result.current[1](UPDATE_VALUE);
      result.current[2].back();
      result.current[2].forward();
    });
    expect(result.current[0]).toBe(UPDATE_VALUE);
  });

  it("should limit history to set capacity.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    act(() => {
      result.current[1](UPDATE_VALUE);
      UPDATE_ARRAY.forEach((v) => result.current[1](v));
    });
    expect(result.current[2].history.length).toBe(CAPACITY);
  });

  it("should go to a point in history.", () => {
    const { result } = renderHook(() =>
      useStateWithHistory(INIT_VALUE, CAPACITY)
    );
    act(() => {
      result.current[1](UPDATE_VALUE);
      result.current[2].go(0);
    });
    expect(result.current[0]).toBe(INIT_VALUE);
  });
});
