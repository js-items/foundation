import Cursor from "./cursor";
export default interface Pagination {
    readonly before?: Cursor;
    readonly after?: Cursor;
    readonly limit?: number;
}
