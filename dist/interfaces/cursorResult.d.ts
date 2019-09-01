import Cursor from "./Cursor";
export default interface CursorResult {
    readonly before: Cursor;
    readonly after: Cursor;
    readonly hasBefore: boolean;
    readonly hasAfter: boolean;
    readonly totalCount?: number;
}
