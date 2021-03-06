import Cursor from "../../interfaces/Cursor";
import Item from "../../interfaces/Item";
import Sort from "../../interfaces/Sort";
import createCursorFromItem from "../createCursorFromItem";

export interface Options<I extends Item> {
  readonly items: I[];
  readonly cursor: Cursor;
  readonly sort: Sort<I>;
}

export interface Result {
  readonly before: Cursor;
  readonly after: Cursor;
}

export default <I extends Item>({
  items,
  cursor,
  sort
}: Options<I>): Result => {
  if (items.length !== 0) {
    const first = items[0];
    const last = items[items.length - 1];

    return {
      after: createCursorFromItem(last, sort),
      before: createCursorFromItem(first, sort)
    };
  }
  
  return {
    after: cursor,
    before: cursor
  };
};
