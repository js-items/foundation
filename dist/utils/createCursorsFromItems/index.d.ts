import Cursor from "../../interfaces/cursor";
import Item from "../../interfaces/item";
import Sort from "../../interfaces/sort";
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
