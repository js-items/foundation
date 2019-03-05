import Filter from '../../interfaces/Filter';
import Item from '../../interfaces/Item';

export interface Options<I extends Item> {
  readonly filter?: Filter<I>;
}

export type DeleteItems<I extends Item> = (options: Options<I>) => Promise<void>;

export default DeleteItems;
