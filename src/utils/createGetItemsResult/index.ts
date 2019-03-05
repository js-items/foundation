import { Result } from "../../functions/getItems";
import Item from "../../interfaces/item";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
import createCursorFromItems from "../createCursorsFromItems";

export interface Options<I extends Item> {
  readonly items: I[];
  readonly pagination: Pagination;
  readonly isEnd: boolean;
  readonly sort: Sort<I>;
}

export default <I extends Item>({
  items,
  isEnd,
  pagination,
  sort
}: Options<I>): Result<I> => {
  const { before, after } = pagination;

  const isBackward = before !== undefined;
  const isForward = after !== undefined;
  const cursor = isBackward ? before : after;
  const isStart = cursor === undefined;
  const hasBefore = (isBackward && !isEnd) || (isForward && !isStart);
  const hasAfter = (isForward && !isEnd) || (isBackward && !isStart);

  const cursorResults = createCursorFromItems({
    cursor,
    items,
    sort
  });

  return {
    cursor: {
      after: cursorResults.after,
      before: cursorResults.before,
      hasAfter,
      hasBefore
    },
    items
  };
};
