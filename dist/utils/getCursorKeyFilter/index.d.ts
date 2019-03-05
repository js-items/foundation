import Item from "../../interfaces/Item";
import Pagination from "../../interfaces/Pagination";
import Sort from "../../interfaces/Sort";
declare const _default: <I extends Item>(sortKey: string, sort: Sort<I>, pagination: Pagination, cursorObj: any) => {
    $gt: any;
    $gte?: undefined;
    $lt?: undefined;
    $lte?: undefined;
} | {
    $gte: any;
    $gt?: undefined;
    $lt?: undefined;
    $lte?: undefined;
} | {
    $lt: any;
    $gt?: undefined;
    $gte?: undefined;
    $lte?: undefined;
} | {
    $lte: any;
    $gt?: undefined;
    $gte?: undefined;
    $lt?: undefined;
};
export default _default;
