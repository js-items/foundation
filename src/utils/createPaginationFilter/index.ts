import atob from "atob";
import { start } from "../../interfaces/Cursor";
import Filter from "../../interfaces/Filter";
import Item from "../../interfaces/Item";
import Pagination from "../../interfaces/Pagination";
import Sort from "../../interfaces/Sort";
import getCursorKeyFilter from "../getCursorKeyFilter";

export default <I extends Item>(
  pagination: Pagination,
  sort: Sort<I>
): Filter<I> => {
  const { before, after } = pagination;

  if (before === start && after === start) {
    return {};
  }

  const cursor = before !== undefined ? before : (after as string);
  const cursorObj = JSON.parse(atob(cursor));
  const sortKeys = Object.keys(sort);

  const sortKeyFilters = sortKeys.map((sortKey, keyIndex) => {
    const sortKeysToMatch = sortKeys.slice(0, keyIndex);
    const matchFilter = sortKeysToMatch.reduce(
      // tslint:disable-next-line:no-any
      (result: any, sortKeyToMatch) => ({
        ...result,
        [sortKeyToMatch]: cursorObj[sortKeyToMatch]
      }),
      {}
    );

    const cursorKeyFilter = getCursorKeyFilter(
      sortKey,
      sort,
      pagination,
      cursorObj
    );

    return { ...matchFilter, [sortKey]: cursorKeyFilter };
  });

  return { $or: sortKeyFilters };
};
