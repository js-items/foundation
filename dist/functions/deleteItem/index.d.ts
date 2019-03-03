import Filter from '../../interfaces/filter';
import Item from '../../interfaces/item';
export interface Options<I extends Item> {
    readonly id: string;
    readonly filter?: Filter<I>;
}
export declare type DeleteItem<I extends Item> = (options: Options<I>) => Promise<void>;
export default DeleteItem;
