import Cursor from "./cursor";

export default interface CursorResult {
  readonly before: Cursor;
  readonly after: Cursor;
  readonly hasBefore: boolean;
  readonly hasAfter: boolean;
}