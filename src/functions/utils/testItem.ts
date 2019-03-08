import Item from "../../interfaces/Item";

export interface TestItem extends Item {
  readonly booleanProperty: boolean;
  readonly stringProperty: string;
  readonly numberProperty: number;
}

export const testId = "6da9dce6-be40-4fac-bd9c-6a2f348a1c87";

const testItem: TestItem = {
  booleanProperty: false,
  id: testId,
  numberProperty: 1,
  stringProperty: "foo"
};

export const firstItemId = "id1";
export const secondItemId = "id2";

export const firstItem = {
  ...testItem,
  id: firstItemId,
  numberProperty: 1,
  stringProperty: "zebra"
};

export const secondItem = {
  ...testItem,
  id: secondItemId,
  numberProperty: 2,
  stringProperty: "slon"
};

export default testItem;
