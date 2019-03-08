import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import testItem, {
  firstItem,
  firstItemId,
  secondItem,
  secondItemId,
  testId,
  TestItem
} from "../utils/testItem";
import testUsingFilter from "../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  describe("getItem", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        const firstItemResult = await facade.getItem({
          filter,
          id: firstItemId
        });
        expect(firstItemResult.item).toEqual(firstItem);

        const secondItemResult = await facade.getItem({
          filter,
          id: secondItemId
        });
        expect(secondItemResult.item).toEqual(secondItem);
      },
      toGetFirstItem: async filter => {
        const firstItemResult = await facade.getItem({
          filter,
          id: firstItemId
        });
        expect(firstItemResult.item).toEqual(firstItem);
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
        const secondItemResult = await facade.getItem({
          filter,
          id: secondItemId
        });
        expect(secondItemResult.item).toEqual(secondItem);
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
