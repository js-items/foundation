import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import {
  secondItem,
  secondItemId,
  TestItem
} from "../utils/testItem";
import testUsingFilter from "../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  describe("deleteItems", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        await facade.deleteItems({ filter });

        const { items } = await facade.getItems({
          filter
        });

        expect(items).toEqual([]);
      },
      toGetFirstItem: async filter => {
        // tslint:disable-next-line:no-console
        await facade.deleteItems({ filter });

        const { items } = await facade.getItems({});

        expect(items).toEqual([secondItem]);
      },
      toGetNoItems: async filter => {
        await facade.deleteItems({ filter });

        const { items } = await facade.getItems({ filter });

        expect(items).toEqual([]);
      },
      toGetSecondItem: async filter => {
        await facade.deleteItem({ id: secondItemId, filter });
        try {
          await facade.getItem({ id: secondItemId });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      }
    });
  });
};
