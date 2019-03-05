import Cursor from "./Cursor";

export default interface Pagination {
  readonly before?: Cursor;
  readonly after?: Cursor;
  readonly limit?: number;
}
