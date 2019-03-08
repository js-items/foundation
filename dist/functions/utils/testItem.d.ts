import Item from "../../interfaces/Item";
export interface TestItem extends Item {
    readonly booleanProperty: boolean;
    readonly stringProperty: string;
    readonly numberProperty: number;
}
export declare const testId = "6da9dce6-be40-4fac-bd9c-6a2f348a1c87";
declare const testItem: TestItem;
export declare const firstItemId = "id1";
export declare const secondItemId = "id2";
export declare const firstItem: {
    id: string;
    numberProperty: number;
    stringProperty: string;
    booleanProperty: boolean;
};
export declare const secondItem: {
    id: string;
    numberProperty: number;
    stringProperty: string;
    booleanProperty: boolean;
};
export default testItem;
