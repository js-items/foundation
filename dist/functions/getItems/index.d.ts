import CursorResult from '../../interfaces/cursorResult';
import Filter from '../../interfaces/filter';
import Item from '../../interfaces/item';
import Pagination from '../../interfaces/pagination';
import Sort from '../../interfaces/sort';
export interface Options<I extends Item> {
    readonly filter?: Filter<I>;
    readonly sort?: Sort<I>;
    readonly pagination?: Pagination;
}
export interface Result<I extends Item> {
    readonly items: I[];
    readonly cursor: CursorResult;
}
export declare type GetItems<I extends Item> = (options: Options<I>) => Promise<Result<I>>;
export default GetItems;
