import Item from './Item';

export interface ComparisonFilter<Value> {
  readonly $eq?: Value;
  readonly $gt?: Value;
  readonly $gte?: Value;
  readonly $in?: Value[];
  readonly $lt?: Value;
  readonly $lte?: Value;
  readonly $ne?: Value;
  readonly $nin?: Value[];
  readonly $not?: ComparisonFilter<Value>;
  readonly $search?: Value;
}

export type ItemFilter<I extends Item> = {
  readonly [P in keyof I]?: I[P] | ComparisonFilter<I[P]>;
};

export interface LogicalFilter<I extends Item> {
  readonly $and?: Filter<I>[];
  readonly $or?: Filter<I>[];
  readonly $nor?: Filter<I>[];
}

export type Filter<I extends Item> = ItemFilter<I> | LogicalFilter<I>;

export default Filter;