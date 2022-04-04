import { useTimeout } from "../hooks/";
import { renderHook, act } from "@testing-library/react-hooks";

const setState = jest.fn();
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("useTimeout testing", () => {
  it("should wait 1 second before running callback.", () => {
    renderHook(() => useTimeout(setState, 1000));
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it("should clear timer before running callback.", () => {
    const { result } = renderHook(() => useTimeout(setState, 1000));
    act(() => {
      result.current.clear();
    });

    expect(setState).not.toBeCalled();
  });

  it("should reset timer then run callback.", () => {
    const { result } = renderHook(() => useTimeout(setState, 1000));

    act(() => {
      result.current.clear();
      result.current.reset();
    });

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
