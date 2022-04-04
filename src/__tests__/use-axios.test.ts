import { useAxios } from "../hooks/";
import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";

const mockData = { name: "foo" };

const server = setupServer(
  rest.get("/name", (req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("useAxios testing", () => {
  it("should fetch data from API.", async () => {
    const { result, waitForNextUpdate } = renderHook(() => {
      useAxios("/name");
    });

    await waitForNextUpdate();
    console.log(result);
    expect(result.current).toEqual(mockData);
  });
});
