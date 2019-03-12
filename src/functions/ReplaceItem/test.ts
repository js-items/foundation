import ItemNotFoundError from "../../errors/ItemNotFoundError";
import Facade from "../../Facade";
import { Filter, Options } from "../../interfaces";
import testItem, {
  firstItem,
  secondItem,
  testId,
  TestItem
} from "../utils/testItem";
import testUsingFilter from "../utils/testUsingFilter";

interface ExpectReplaceItemOptions<T extends TestItem> {
  readonly facade: Facade<T>;
  readonly filter?: Filter<T>;
  readonly id: string;
  readonly item: T;
}

const expectReplaceItem = async ({
  facade,
  filter,
  id,
  item
}: ExpectReplaceItemOptions<TestItem>) => {
  const replacement = { ...item, numberProperty: 999 };
  const result = await facade.replaceItem({
    filter,
    id,
    item
  });
  expect(result.item).toEqual(replacement);
};

export default ({ facade }: Options<TestItem>) => {
  describe("replaceItem", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        await expectReplaceItem({
          facade,
          filter,
          id: firstItem.id,
          item: firstItem
        });

        await expectReplaceItem({
          facade,
          filter,
          id: secondItem.id,
          item: secondItem
        });
      },
      toGetFirstItem: async filter => {
        await expectReplaceItem({
          facade,
          filter,
          id: firstItem.id,
          item: firstItem
        });
      },
      toGetNoItems: async filter => {
        try {
          await expectReplaceItem({
            facade,
            filter,
            id: secondItem.id,
            item: secondItem
          });
        } catch (e) {
          expect(e).toBeInstanceOf(ItemNotFoundError);
        }
      },
      toGetSecondItem: async filter => {
        await expectReplaceItem({
          facade,
          filter,
          id: secondItem.id,
          item: secondItem
        });
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
      id: testId,
      numberProperty: 17,
      stringProperty: "foobar"
    };

    await facade.createItem({ id: testId, item: testItem });

    const { item: replacedItem } = await facade.replaceItem({
      id: testId,
      item: itemReplacement
    });

    const { item } = await facade.getItem({ id: testId });

    expect(item).toEqual(itemReplacement);
    expect(replacedItem).toEqual(itemReplacement);
  });
  // tslint:disable-next-line:max-file-line-count
};
