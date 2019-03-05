import { start } from "../../interfaces/cursor";
import Item from "../../interfaces/item";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
import { asc } from "../../interfaces/sortOrder";
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
