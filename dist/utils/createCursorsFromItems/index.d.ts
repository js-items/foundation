import Cursor from "../../interfaces/Cursor";
import Item from "../../interfaces/Item";
import Sort from "../../interfaces/Sort";
export interface Options<I extends Item> {
    readonly items: I[];
    readonly cursor: Cursor;
    readonly sort: Sort<I>;
}
export interface Result {
    readonly before: Cursor;
    readonly after: Cursor;
}
declare const _default: <I extends Item>({ items, cursor, sort }: Options<I>) => Result;
export default _default;
