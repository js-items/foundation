import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import testItem, { testId, TestItem } from "../utils/testItem";
import testUsingFilter, {
  firstItem,
  secondItem
} from "../utils/testUsingFilter";


export default ({ facade }: Options<TestItem>) => {
  describe("replaceItem", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        const firstItemReplacement = { ...firstItem, numberProperty: 77 };
        const firstItemResult = await facade.replaceItem({
          filter,
          id: firstItem.id,
          item: firstItemReplacement
        });
        expect(firstItemResult.item).toEqual(firstItemReplacement);

        const secondItemReplacement = { ...secondItem, numberProperty: 99 };
        const secondItemResult = await facade.replaceItem({
          filter,
          id: secondItem.id,
          item: secondItemReplacement
        });
        expect(secondItemResult.item).toEqual(secondItemReplacement);
      },
      toGetFirstItem: async filter => {
        const firstItemReplacement = { ...firstItem, numberProperty: 77 };
        const firstItemResult = await facade.replaceItem({
          filter,
          id: firstItem.id,
          item: firstItemReplacement
        });
        expect(firstItemResult.item).toEqual(firstItemReplacement);
      },
      toGetNoItems: async filter => {
        try {
          const secondItemReplacement = { ...secondItem, numberProperty: 99 };
          await facade.replaceItem({
            filter,
            id: secondItem.id,
            item: secondItemReplacement
          });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      },
      toGetSecondItem: async filter => {
        const secondItemReplacement = { ...secondItem, numberProperty: 99 };
        const secondItemResult = await facade.replaceItem({
          filter,
          id: secondItem.id,
          item: secondItemReplacement
        });
        expect(secondItemResult.item).toEqual(secondItemReplacement);
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

  it("throws error when item does not exist", async () => {
    try {
      await facade.replaceItem({ id: "notExistingId", item: testItem });
      await facade.getItem({ id: testId });
    } catch (e) {
      expect(e).toBeInstanceOf(ItemNotFoundError);
    }
  });

  it("replaces item", async () => {
    const itemReplacement: TestItem = {
      booleanProperty: true,
      id: "someOtherId",
      numberProperty: 17,
      stringProperty: "foobar"
    };
    await facade.createItem({ id: testId, item: testItem });
    await facade.replaceItem({
      id: testId,
      item: itemReplacement
    });
    const { item } = await facade.getItem({ id: testId });
    expect(item).toEqual(itemReplacement);
  });
// tslint:disable-next-line:max-file-line-count
};
