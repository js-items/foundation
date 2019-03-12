import testItem, { TestItem } from "../../functions/utils/testItem";
import { asc } from "../../interfaces/SortOrder";
import createCursorFromItem from "./index";

describe("@createCursorFromItem", () => {
  it("should return the correct cursor", () => {
    const result = createCursorFromItem<TestItem>(testItem, { id: asc });
    expect(result).toBe("eyJpZCI6IjZkYTlkY2U2LWJlNDAtNGZhYy1iZDljLTZhMmYzNDhhMWM4NyJ9");
  });
});
