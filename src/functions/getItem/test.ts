import ItemNotFoundError from "../../errors/itemNotFoundError";
import Options from "../../interfaces/options";
import testItem, { testId, TestItem } from "../utils/testItem";
import testUsingFilter, {
  firstItem,
  firstItemId,
  secondItem,
  secondItemId,
} from "../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  describe("getItem", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        const firstItemResult = await facade.getItem({ id: firstItemId, filter });
        expect(firstItemResult.item).toBe(firstItem);

        const secondItemResult = await facade.getItem({ id: secondItemId, filter });
        expect(secondItemResult.item).toBe(secondItem);
      },
      toGetFirstItem: async filter => {
        const firstItemResult = await facade.getItem({ id: firstItemId, filter });
        expect(firstItemResult.item).toBe(firstItem);
      },
      toGetNoItems: async filter => {
        try {
          await facade.getItem({ id: firstItemId, filter });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
        try {
          await facade.getItem({ id: secondItemId, filter });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      },
      toGetSecondItem: async filter => {
        const secondItemResult = await facade.getItem({ id: secondItemId, filter });
        expect(secondItemResult.item).toBe(secondItem);
      }
    });

    it("throws error when trying to get an item which does not exist", async () => {
      expect.assertions(1);
      try {
        await facade.getItem({ id: testId });
      } catch (e) {
        expect(e).toBeInstanceOf(ItemNotFoundError);
      }
    });

    it("gets an item which exists", async () => {
      await facade.createItem({ id: testId, item: testItem });
      const { item } = await facade.getItem({ id: testId });
     
      expect(item).toEqual(testItem);
    });
  });
};
