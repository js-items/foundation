import xor from "./index";

describe("xor", () => {
  it("returns false when both condition are true", () => {
    expect(xor(true, true)).toBe(false);
  });

  it("returns true when first condition is true and second condition is false", () => {
    expect(xor(true, false)).toBe(true);
  });

  it("returns true when first condition is false and second condition is true", () => {
    expect(xor(false, true)).toBe(true);
  });
});
