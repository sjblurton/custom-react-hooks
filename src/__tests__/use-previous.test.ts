import { usePrevious } from "../hooks/";
import { renderHook } from "@testing-library/react-hooks";

describe("usePrevious testing", () => {
  const { result } = renderHook(() => usePrevious(1));

  it("should init as undefined.", () => {
    expect(result.current).toBe(undefined);
  });
});
