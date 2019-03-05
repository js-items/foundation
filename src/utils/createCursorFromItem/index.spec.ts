import testItem, { TestItem } from "../../functions/utils/testItem";
import { asc } from "../../interfaces/sortOrder";
import createCursorFromEntity from "./index";

describe("@createCursorFromEntity", () => {
  it("should return the correct cursor", () => {
    const result = createCursorFromEntity<TestItem>(testItem, { id: asc });
    expect(result).toBe("eyJpZCI6IjZkYTlkY2U2LWJlNDAtNGZhYy1iZDljLTZhMmYzNDhhMWM4NyJ9");
  });
});
