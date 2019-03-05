import Filter from '../../interfaces/Filter';
import Item from '../../interfaces/Item';
export interface Options<I extends Item> {
    readonly id: string;
    readonly filter?: Filter<I>;
}
export declare type DeleteItem<I extends Item> = (options: Options<I>) => Promise<void>;
export default DeleteItem;
