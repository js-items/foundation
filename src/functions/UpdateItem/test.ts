import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Options from "../../interfaces/Options";
import testItem, {
  firstItem,
  secondItem,
  testId,
  TestItem
} from "../utils/testItem";
import testUsingFilter from "../utils/testUsingFilter";

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
        expect(firstItemResult.item.numberProperty).toEqual(
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

        expect(secondItemResult.item.numberProperty).toEqual(
          replacedNumberProperty2
        );
      }
    });

    it("throws error when item does not exist", async () => {
      try {
        await facade.updateItem({ id: "notExistingId", patch: testItem });
      } catch (e) {
        expect(e).toBeInstanceOf(ItemNotFoundError);
      }
    });

    it("should update all item properties", async () => {
      const patch: Partial<TestItem> = {
        booleanProperty: false,
        numberProperty: 78,
        stringProperty: "test_string_prop_patch"
      };
      await facade.createItem({ id: testId, item: testItem });

      const { item } = await facade.updateItem({ id: testId, patch });
      const { item: retrievedItem } = await facade.getItem({ id: testId });

      const expectedItem = { ...testItem, ...patch };

      expect(item).toEqual(expectedItem);
      expect(retrievedItem).toEqual(expectedItem);
    });
  });
};
