import { setupEthTesting } from "../setup";

describe("internal events handling", () => {
  test("subscriber callbacks should be triggered when associated event is received", () => {
    const { provider, testingUtils } = setupEthTesting();
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    provider.on("test-event", firstCallback);
    provider.on("test-event", secondCallback);

    testingUtils.lowLevel.emit("test-event", { a: 1 });

    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(firstCallback).toHaveBeenCalledWith({ a: 1 });
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).toHaveBeenCalledWith({ a: 1 });

    provider.removeListener("test-event", secondCallback);

    testingUtils.lowLevel.emit("test-event", { a: 2 });

    expect(firstCallback).toHaveBeenCalledTimes(2);
    expect(firstCallback).toHaveBeenCalledWith({ a: 2 });
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
