import Filter from '../../interfaces/filter';
import Item from '../../interfaces/item';

export interface Options<I extends Item> {
  readonly filter?: Filter<I>;
}

export interface Result {
  readonly count: number;
}

export type CountItems<I extends Item> = (options: Options<I>) => Promise<Result>;

export default CountItems;