import {
  generateTestingUtils
} from "../chunk-K7JXWZ44.mjs";
import "../chunk-42M4MR5S.mjs";
import "../chunk-ZQULDQSE.mjs";
import "../chunk-RMPMDHFW.mjs";
import "../chunk-GX4GIFWD.mjs";
import "../chunk-37FLY26L.mjs";
import "../chunk-5OQIJJXS.mjs";
import "../chunk-MVDKZ5GX.mjs";
import "../chunk-NMOZ7YHK.mjs";
import "../chunk-5OMH6ZLX.mjs";
import "../chunk-TTFRSOOU.mjs";

// src/__tests__/internal-event.test.ts
describe("internal events handling", () => {
  test("subscriber callbacks should be triggered when associated event is received", () => {
    const testingUtils = generateTestingUtils();
    const provider = testingUtils.getProvider();
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
