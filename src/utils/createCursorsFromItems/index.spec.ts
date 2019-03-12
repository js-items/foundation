import testItem, { TestItem } from "../../functions/utils/testItem";
import { start } from "../../interfaces/Cursor";
import Sort from "../../interfaces/Sort";
import { asc } from "../../interfaces/SortOrder";
import createCursorsFromItems from "./index";

describe("createCursorsFromEntities", () => {
  const sort: Sort<TestItem> = { id: asc };
  const firstId = "id1";
  const secondId = "id2";
  const firstItem = { ...testItem, id: firstId };
  const secondItem = { ...testItem, id: secondId };
  const firstCursor = "eyJpZCI6ImlkMSJ9";
  const secondCursor = "eyJpZCI6ImlkMiJ9";

  it("return cursor when no items", () => {
    const items: TestItem[] = [];
    const cursor = start;
    const result = createCursorsFromItems({ cursor, items, sort });

    expect(result).toEqual({
      after: start,
      before: start
    });
  });

  it("return correct cursors when there is one item", () => {
    const items = [firstItem];
    const cursor = start;
    const result = createCursorsFromItems({ cursor, items, sort });
    expect(result).toEqual({
      after: firstCursor,
      before: firstCursor
    });
  });

  it("should return the correct cursors when there are many items", () => {
    const items = [firstItem, secondItem];
    const cursor = start;
    const result = createCursorsFromItems({ cursor, items, sort });

    expect(result).toEqual({
      after: secondCursor,
      before: firstCursor
    });
  });
});
