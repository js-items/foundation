import Filter from '../../interfaces/Filter';
import Item from '../../interfaces/Item';
export interface Options<I extends Item> {
    readonly filter?: Filter<I>;
}
export interface Result {
    readonly count: number;
}
export declare type CountItems<I extends Item> = (options: Options<I>) => Promise<Result>;
export default CountItems;
