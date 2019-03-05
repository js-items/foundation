import Filter from '../../interfaces/Filter';
import Item from '../../interfaces/Item';

export interface Options<I extends Item> {
  readonly id: string;
  readonly item: I;
  readonly filter?: Filter<I>;
}

export interface Result<I extends Item> {
  readonly item: I;
}

export type ReplaceItem<I extends Item> = (options: Options<I>) => Promise<Result<I>>;

export default ReplaceItem;