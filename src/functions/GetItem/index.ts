import Filter from '../../interfaces/filter';
import Item from '../../interfaces/item';

export interface Options<I extends Item> {
  readonly id: string;
  readonly filter?: Filter<I>;
}

export interface Result<I extends Item> {
  readonly item: I;
}

export type GetItem<I extends Item> = (options: Options<I>) => Promise<Result<I>>;

export default GetItem;