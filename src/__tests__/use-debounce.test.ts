import { useDebounce } from "../hooks/";
import { renderHook } from "@testing-library/react-hooks";

const setState = jest.fn();
jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("useDebounce testing", () => {
  it("should wait 1 second before running callback.", () => {
    renderHook(() => useDebounce(setState, 1000, [1]));
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
