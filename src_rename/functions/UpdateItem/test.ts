import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import testItem, { testId, TestItem } from "../utils/testItem";
import testUsingFilter, {
  firstItem,
  secondItem
} from "../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  describe("updateItem", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        const replacedStringProperty1 = "newText1";
        const firstItemResult = await facade.updateItem({
          filter,
          id: firstItem.id,
          patch: { stringProperty: replacedStringProperty1 }
        });
        expect(firstItemResult.item.stringProperty).toEqual(
          replacedStringProperty1
        );

        const replacedStringProperty2 = "newText2";
        const secondItemResult = await facade.updateItem({
          filter,
          id: secondItem.id,
          patch: { stringProperty: replacedStringProperty2 }
        });
        expect(secondItemResult.item.stringProperty).toEqual(
          replacedStringProperty2
        );
      },
      toGetFirstItem: async filter => {
        const replacedNumberProperty1 = 111;
        const firstItemResult = await facade.updateItem({
          filter,
          id: firstItem.id,
          patch: { numberProperty: replacedNumberProperty1 }
        });
        expect(firstItemResult.item.stringProperty).toEqual(
          replacedNumberProperty1
        );
      },
      toGetNoItems: async filter => {
        try {
          await facade.updateItem({
            filter,
            id: secondItem.id,
            patch: { numberProperty: 999 }
          });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      },
      toGetSecondItem: async filter => {
        const replacedNumberProperty2 = 222;
        const secondItemResult = await facade.updateItem({
          filter,
          id: secondItem.id,
          patch: { numberProperty: replacedNumberProperty2 }
        });
        expect(secondItemResult.item.stringProperty).toEqual(
          replacedNumberProperty2
        );
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
