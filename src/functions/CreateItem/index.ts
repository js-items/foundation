import Item from '../../interfaces/item';

export interface Options<I extends Item> {
  readonly id: string;
  readonly item: I;
}

export interface Result<I extends Item> {
  readonly item: I;
}

export type CreateItems<I extends Item> = (options: Options<I>) => Promise<Result<I>>;

export default CreateItems;