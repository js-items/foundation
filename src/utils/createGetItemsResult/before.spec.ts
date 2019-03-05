import testItem, { TestItem } from "../../functions/utils/testItem";
import { start } from "../../interfaces/cursor";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
import { asc } from "../../interfaces/sortOrder";
import createGetItemsResult from "./index";

describe("createGetItemsResult backward", () => {
  const sort: Sort<TestItem> = { id: asc };

  const firstId = "test_id_1";

  const firstItem = { ...testItem, id: firstId };

  const firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
  const secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";

  it("returns correct result when there are no items and no cursors present", () => {
    const items: TestItem[] = [];
    const pagination: Pagination = {
      after: start,
      before: start,
      limit: 1
    };

    const isEnd = true;
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: start,
        before: start,
        hasAfter: false,
        hasBefore: false
      },
      items
    });
  });

  it("returns correct result when no items present and cursor is present", () => {
    const items: TestItem[] = [];
    const pagination: Pagination = {
      before: firstCursor,
      limit: 1
    };
    const isEnd = true;
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      items
    });
  });

  it("returns correct result when items and cursor is present", () => {
    const items: TestItem[] = [firstItem];
    const pagination: Pagination = {
      before: secondCursor,
      limit: 1
    };
    const isEnd = true;
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      items
    });
  });
});
