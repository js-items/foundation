import Item from '../../interfaces/Item';

export interface TestItem extends Item {
  readonly booleanProperty: boolean;
  readonly stringProperty: string;
  readonly numberProperty: number;
}

export const testId = '6da9dce6-be40-4fac-bd9c-6a2f348a1c87';

const testItem: TestItem = {
  booleanProperty: false,
  id: testId,
  numberProperty: 1,
  stringProperty: 'foo',
}

export default testItem;