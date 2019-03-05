import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import testItem, { testId, TestItem } from "../utils/testItem";
import testUsingFilter, {
  firstItemId,
  secondItemId
} from "../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  describe("deleteItem", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        await facade.deleteItem({ id: firstItemId, filter });
        await facade.deleteItem({ id: secondItemId, filter });
        try {
          await facade.getItem({ id: firstItemId });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
        try {
          await facade.getItem({ id: secondItemId });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      },
      toGetFirstItem: async filter => {
        await facade.deleteItem({ id: firstItemId, filter });
        try {
          await facade.getItem({ id: firstItemId });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      },
      toGetNoItems: async filter => {
        try {
          await facade.deleteItem({ id: secondItemId, filter });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
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

    it("throws error when trying to delete an item which does not exist", async () => {
      expect.assertions(1);
      try {
        await facade.deleteItem({ id: testId });
      } catch (e) {
        expect(e).toBeInstanceOf(ItemNotFoundError);
      }
    });

    it("deletes an item which exists", async () => {
      await facade.createItem({ id: testId, item: testItem });
      await facade.deleteItem({ id: testId });
      try {
        await facade.getItem({ id: testId });
      } catch (e) {
        expect(e).toBeInstanceOf(ItemNotFoundError);
      }
    });
  });
};
