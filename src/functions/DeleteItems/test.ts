import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Facade from "../../Facade";
import { Filter, Options } from "../../interfaces";
import { firstItem, secondItem, secondItemId, TestItem } from "../utils/testItem";
import testUsingFilter from "../utils/testUsingFilter";

interface ExpectDeleteItemsOptions<T extends TestItem> {
  readonly facade: Facade<T>;
  readonly filter?: Filter<T>;
  readonly expectedValue: T[];
}

const expectDeleteItems = async ({
  facade,
  filter,
  expectedValue
}: ExpectDeleteItemsOptions<TestItem>) => {
  await facade.deleteItems({ filter });

  const { items } = await facade.getItems({});

  expect(items).toEqual(expectedValue);
};

export default ({ facade }: Options<TestItem>) => {
  describe("deleteItems", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        await expectDeleteItems({
          expectedValue: [],
          facade,
          filter
        });
      },
      toGetFirstItem: async filter => {
        await expectDeleteItems({
          expectedValue: [secondItem],
          facade,
          filter
        });
      },
      toGetNoItems: async filter => {
        await expectDeleteItems({
          expectedValue: [firstItem, secondItem],
          facade,
          filter
        });
      },
      toGetSecondItem: async filter => {
        await facade.deleteItems({ filter });
        try {
          await facade.getItem({ id: secondItemId });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      }
    });
  });
};
