import btoa from "btoa";
import Cursor from "../../interfaces/Cursor";
import Item from "../../interfaces/Item";
import Sort from "../../interfaces/Sort";

export default <I extends Item>(item: I, sort: Sort<I>): Cursor => {
  const sortKeys = Object.keys(sort);
  const cursorResult = sortKeys.reduce<Partial<I>>(
    // tslint:disable-next-line:no-any
    (result, sortKey) => ({ ...result, [sortKey]: (item as any)[sortKey] }),
    {}
  );
  
  return btoa(JSON.stringify(cursorResult));
};
