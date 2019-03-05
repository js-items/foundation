import Filter from "../../interfaces/Filter";
import Item from "../../interfaces/Item";
import Pagination from "../../interfaces/Pagination";
import Sort from "../../interfaces/Sort";
declare const _default: <I extends Item>(pagination: Pagination, sort: Sort<I>) => Filter<I>;
export default _default;
