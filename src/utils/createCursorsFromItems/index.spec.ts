import testItem, { TestItem } from "../../functions/utils/testItem";
import { firstItem } from "../../functions/utils/testUsingFilter";
import { start } from "../../interfaces/cursor";
import Sort from "../../interfaces/sort";
import { asc } from "../../interfaces/sortOrder";
import createCursorsFromItems from "./index";

describe("createCursorsFromEntities", () => {
  const sort: Sort<TestItem> = { id: asc };
  const firstId = "id1";
  const secondId = "id2";
  const firstEntity = { ...testItem, id: firstId };
  const secondEntity = { ...testItem, id: secondId };
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

  it("should return the correct cursors when there are many entities", () => {
    const items = [firstEntity, secondEntity];
    const cursor = start;
    const result = createCursorsFromItems({ cursor, items, sort });

    expect(result).toEqual({
      after: secondCursor,
      before: firstCursor
    });
  });
});
