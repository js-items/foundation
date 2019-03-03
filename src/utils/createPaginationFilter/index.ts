import atob from "atob";
import { start } from "../../interfaces/cursor";
import Filter from "../../interfaces/filter";
import Item from "../../interfaces/item";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
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
