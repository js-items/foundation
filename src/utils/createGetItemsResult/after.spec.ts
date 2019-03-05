import testItem, { TestItem } from "../../functions/utils/testItem";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
import { asc } from "../../interfaces/sortOrder";
import createGetItemsResult from "./index";

describe("createGetItemsResult forward", () => {
  const sort: Sort<TestItem> = { id: asc };

  const secondId = "test_id_2";

  const secondItem = { ...testItem, id: secondId };

  const firstCursor = "eyJpZCI6InRlc3RfaWRfMSJ9";
  const secondCursor = "eyJpZCI6InRlc3RfaWRfMiJ9";

  it("returns correct result when items and cursor is present", () => {
    const items: TestItem[] = [secondItem];
    const pagination: Pagination = {
      after: firstCursor,
      limit: 1
    };
    const isEnd = true;
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: secondCursor,
        before: secondCursor,
        hasAfter: false,
        hasBefore: true
      },
      items
    });
  });

  it("returns correct result when no items and cursor is present", () => {
    const items: TestItem[] = [];
    const pagination: Pagination = {
      after: secondCursor,
      limit: 1
    };
    const isEnd = true;
    const result = createGetItemsResult({ items, isEnd, pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: secondCursor,
        before: secondCursor,
        hasAfter: false,
        hasBefore: true
      },
      items
    });
  });
});
