import testItem, { TestItem } from "../../functions/utils/testItem";
import { Cursor, CursorResult, Pagination, Sort } from "../../interfaces";
import { start } from "../../interfaces/Cursor";
import { asc } from "../../interfaces/SortOrder";
import createGetItemsResult from "./index";

describe("createGetItemsResult backward", () => {
  const sort: Sort<TestItem> = { id: asc };
  const isEnd = true;

  interface ExpectCorrectResultOptions<T extends TestItem> {
    readonly items: T[];
    readonly before: Cursor;
    readonly after?: Cursor;
    readonly expectedCursor: CursorResult;
  }

  const expectCorrectResult = ({
    after,
    items,
    before,
    expectedCursor
  }: ExpectCorrectResultOptions<TestItem>) => {
    const pagination: Pagination = {
      after,
      before,
      limit: 1
    };
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: expectedCursor,
      items
    });
  };

  const firstId = "test_id_1";

  const firstItem = { ...testItem, id: firstId };

  const firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
  const secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";

  it("returns correct result when there are no items and no cursors present", () => {
    const items: TestItem[] = [];

    const expectedCursor = {
      after: start,
      before: start,
      hasAfter: false,
      hasBefore: false
    };

    expectCorrectResult({
      after: start,
      before: start,
      expectedCursor,
      items
    });
  });

  it("returns correct result when no items present and cursor is present", () => {
    const items: TestItem[] = [];

    const expectedCursor = {
      after: firstCursor,
      before: firstCursor,
      hasAfter: true,
      hasBefore: false
    };

    expectCorrectResult({
      before: firstCursor,
      expectedCursor,
      items
    });
  });

  it("returns correct result when items and cursor is present", () => {
    const items: TestItem[] = [firstItem];

    const expectedCursor = {
      after: firstCursor,
      before: firstCursor,
      hasAfter: true,
      hasBefore: false
    };

    expectCorrectResult({
      before: secondCursor,
      expectedCursor,
      items
    });
  });
});
