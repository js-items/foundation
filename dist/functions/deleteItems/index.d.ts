import Filter from '../../interfaces/filter';
import Item from '../../interfaces/item';
export interface Options<I extends Item> {
    readonly filter?: Filter<I>;
}
export declare type DeleteItems<I extends Item> = (options: Options<I>) => Promise<void>;
export default DeleteItems;
