import testItem, { TestItem } from "../../functions/utils/testItem";
import { Cursor, CursorResult, Pagination, Sort } from "../../interfaces";
import { asc } from "../../interfaces/SortOrder";
import createGetItemsResult from "./index";

describe("createGetItemsResult forward", () => {
  const sort: Sort<TestItem> = { id: asc };
  const isEnd = true;

  const secondId = "test_id_2";
  const secondItem = { ...testItem, id: secondId };

  const firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
  const secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";

  interface ExpectCorrectResultOptions<T extends TestItem> {
    readonly items: T[];
    readonly after: Cursor;
    readonly expectedCursor: CursorResult;
  }

  const expectCorrectResult = ({
    items,
    after,
    expectedCursor
  }: ExpectCorrectResultOptions<TestItem>) => {
    const pagination: Pagination = {
      after,
      limit: 1
    };
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: expectedCursor,
      items
    });
  };

  it("returns correct result when items and cursor is present", () => {
    const items: TestItem[] = [secondItem];
    const expectedCursor = {
      after: secondCursor,
      before: secondCursor,
      hasAfter: false,
      hasBefore: true
    };

    expectCorrectResult({
      after: firstCursor,
      expectedCursor,
      items
    });
  });

  it("returns correct result when no items and cursor is present", () => {
    const items: TestItem[] = [];

    const expectedCursor = {
      after: secondCursor,
      before: secondCursor,
      hasAfter: false,
      hasBefore: true
    };

    expectCorrectResult({
      after: secondCursor,
      expectedCursor,
      items
    });
  });
});
