import { Result } from "../../functions/getItems";
import Item from "../../interfaces/Item";
import Pagination from "../../interfaces/Pagination";
import Sort from "../../interfaces/Sort";
export interface Options<I extends Item> {
    readonly items: I[];
    readonly pagination: Pagination;
    readonly isEnd: boolean;
    readonly sort: Sort<I>;
}
declare const _default: <I extends Item>({ items, isEnd, pagination, sort }: Options<I>) => Result<I>;
export default _default;
