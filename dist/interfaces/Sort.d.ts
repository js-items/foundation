import Item from './Item';
import SortOrder from './SortOrder';
declare type Sort<I extends Item> = {
    readonly [P in keyof I]?: SortOrder;
};
export default Sort;
