import Item from './item';
import SortOrder from './sortOrder';
declare type Sort<I extends Item> = {
    readonly [P in keyof I]?: SortOrder;
};
export default Sort;
