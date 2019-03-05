import { start } from "../../interfaces/Cursor";
import Item from "../../interfaces/Item";
import Pagination from "../../interfaces/Pagination";
import Sort from "../../interfaces/Sort";
import { asc } from "../../interfaces/SortOrder";
import xor from "../xor";

export default <I extends Item>(
  sortKey: string,
  sort: Sort<I>,
  pagination: Pagination,
  // tslint:disable-next-line:no-any
  cursorObj: any
) => {
  const sortOrder = sort[sortKey as keyof I];
  const ascendingPagination = !xor(
    sortOrder === asc,
    pagination.after !== start
  );
  const cursorValue = cursorObj[sortKey];
  if (ascendingPagination) {
    return sortKey === "id" ? { $gt: cursorValue } : { $gte: cursorValue };
  } else {
    return sortKey === "id" ? { $lt: cursorValue } : { $lte: cursorValue };
  }
};
