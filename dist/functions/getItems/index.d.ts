import CursorResult from '../../interfaces/CursorResult';
import Filter from '../../interfaces/Filter';
import Item from '../../interfaces/Item';
import Pagination from '../../interfaces/Pagination';
import Sort from '../../interfaces/Sort';
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
