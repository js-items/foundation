import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import { TestItem } from "../utils/testItem";
import testUsingFilter, {
  firstItem,
  secondItem,
  secondItemId
} from "../utils/testUsingFilter";

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
        await facade.deleteItems({ filter });

        const { items } = await facade.getItems({ filter });

        expect(items).toEqual([secondItem]);
      },
      toGetNoItems: async filter => {
        await facade.deleteItems({ filter });

        const { items } = await facade.getItems({ filter });

        expect(items).toEqual([firstItem, secondItem]);
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
