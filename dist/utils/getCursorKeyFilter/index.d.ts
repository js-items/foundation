import Item from "../../interfaces/item";
import Pagination from "../../interfaces/pagination";
import Sort from "../../interfaces/sort";
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
