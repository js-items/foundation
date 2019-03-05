import testItem, { TestItem } from "../../functions/utils/testItem";
import { start } from "../../interfaces/cursor";
import Filter from "../../interfaces/filter";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
import { asc, desc } from "../../interfaces/sortOrder";
import createCursorFromItem from "../createCursorFromItem";
import createPaginationFilter from "./index";

describe("createPaginationFilter", () => {
  const sort: Sort<TestItem> = { numberProperty: desc, id: asc };

  it("should return empty filter when the cursor is start", () => {
    const pagination: Pagination = {
      after: start,
      before: start,
      limit: 1
    };
    const actualResult = createPaginationFilter<TestItem>(pagination, sort);
    expect(actualResult).toEqual({});
  });

  it("should return the correct filter when after cursor is defined", () => {
    const cursor = createCursorFromItem<TestItem>(testItem, sort);
    const pagination: Pagination = { after: cursor, limit: 1 };
    const actualResult = createPaginationFilter<TestItem>(pagination, sort);
    const expectedResult: Filter<TestItem> = {
      $or: [
        {
          numberProperty: { $lte: testItem.numberProperty }
        },
        {
          id: { $gt: testItem.id },
          numberProperty: testItem.numberProperty
        }
      ]
    };
    expect(actualResult).toEqual(expectedResult);
  });

  it("should return the correct filter when before cursor is defined", () => {
    const cursor = createCursorFromItem<TestItem>(testItem, sort);
    const pagination: Pagination = { before: cursor, limit: 1 };
    const actualResult = createPaginationFilter<TestItem>(pagination, sort);
    const expectedResult: Filter<TestItem> = {
      $or: [
        {
          numberProperty: { $gte: testItem.numberProperty }
        },
        {
          id: { $lt: testItem.id },
          numberProperty: testItem.numberProperty
        }
      ]
    };
    expect(actualResult).toEqual(expectedResult);
  });
});
