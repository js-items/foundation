import Filter from "../../interfaces/filter";
import Item from "../../interfaces/item";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
declare const _default: <I extends Item>(pagination: Pagination, sort: Sort<I>) => Filter<I>;
export default _default;
