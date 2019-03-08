import Facade from "../../Facade";
import Filter from "../../interfaces/Filter";
import { TestItem } from "./testItem";
declare type FilterAssertion = (filter?: Filter<TestItem>) => Promise<void>;
interface Options {
    readonly facade: Facade<TestItem>;
    readonly toGetAllItems: FilterAssertion;
    readonly toGetFirstItem: FilterAssertion;
    readonly toGetSecondItem: FilterAssertion;
    readonly toGetNoItems: FilterAssertion;
}
declare const _default: ({ facade, toGetAllItems, toGetFirstItem, toGetSecondItem, toGetNoItems }: Options) => void;
export default _default;
