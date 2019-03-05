import Facade from "../../facade";
import Filter from "../../interfaces/filter";
import testEntity, { TestItem } from "./testItem";

type FilterAssertion = (filter?: Filter<TestItem>) => Promise<void>;

interface Options {
  readonly facade: Facade<TestItem>;
  readonly toGetAllItems: FilterAssertion;
  readonly toGetFirstItem: FilterAssertion;
  readonly toGetSecondItem: FilterAssertion;
  readonly toGetNoItems: FilterAssertion;
}

export const firstItemId = "id1";
export const secondItemId = "id2";

export const firstItem = {
  ...testEntity,
  id: firstItemId,
  numberProperty: 1,
  stringProperty: "zebra"
};

export const secondItem = {
  ...testEntity,
  id: secondItemId,
  numberProperty: 2,
  stringProperty: "slon"
};

export default ({
  facade,
  toGetAllItems,
  toGetFirstItem,
  toGetSecondItem,
  toGetNoItems
}: Options) => {
  beforeEach(async () => {
    await facade.createItem({
      id: firstItemId,
      item: firstItem
    });
    await facade.createItem({
      id: secondItemId,
      item: secondItem
    });
  });

  afterEach(async () => {
    await facade.deleteItems({
      filter: {}
    });
  });

  describe("toGetAllItems", () => {
    it("will not filter when filter is not defined", async () => {
      await toGetAllItems(undefined);
    });

    it("should not filter when using empty filter", async () => {
      await toGetAllItems({});
    });

    it("should not filter when using filter which return both items", async () => {
      await toGetAllItems({
        booleanProperty: testEntity.booleanProperty
      });
    });
  });

  describe("toGetFirstItem", () => {
    it("uses exact property match", async () => {
      await toGetFirstItem({
        stringProperty: firstItem.stringProperty
      });
    });

    it("uses '$eq' comparison filter", async () => {
      await toGetFirstItem({
        numberProperty: 1
      });
    });

    it("uses '$in' comparison filter", async () => {
      await toGetFirstItem({
        stringProperty: {
          $in: [firstItem.stringProperty, "foo", "bar"]
        }
      });
    });

    it("uses '$lt' comparison filter", async () => {
      await toGetSecondItem({
        numberProperty: 2
      });
    });

    it("uses '$lte' comparison filter", async () => {
      await toGetFirstItem({
        numberProperty: 1
      });
    });

    it("uses '$ne' comparison filter", async () => {
      await toGetFirstItem({
        stringProperty: secondItem.stringProperty
      });
    });

    it("uses '$nin' comparison filter", async () => {
      await toGetFirstItem({
        stringProperty: {
          $nin: [secondItem.stringProperty, "foo", "bar"]
        }
      });
    });

    it("uses '$search' comparison filter", async () => {
      await toGetFirstItem({
        stringProperty: {
          $search: "br"
        }
      });
    });
  });

  describe("toGetSecondItem", () => {
    it("uses '$gte' comparison filter", async () => {
      await toGetSecondItem({ numberProperty: { $gte: 2 } });
    });

    it("uses '$gt' comparison filter", async () => {
      await toGetSecondItem({ numberProperty: { $gt: 1 } });
    });


    it("uses '$and' logical filter", async () => {
      await toGetSecondItem({
        $and: [
          {
            stringProperty: { $search: "on" }
          },
          {
            numberProperty: { $eq: 2 }
          }
        ]
      });
    });

    it("uses '$or' logical filter", async () => {
      await toGetSecondItem({
        $or: [
          {
            stringProperty: { $search: "kokos" }
          },
          {
            numberProperty: { $ne: 1 }
          }
        ]
      });
    });

    it("uses '$nor' logical filter", async () => {
      await toGetSecondItem({
        $nor: [
          {
            stringProperty: { $search: "kokos" }
          },
          {
            numberProperty: { $ne: 1 }
          }
        ]
      });
    });
  });

  describe("toGetNoItems", () => {
    it("will not get any items", async () => {
      await toGetNoItems({ numberProperty: 999 });
    });
  });
  // tslint:disable-next-line:max-file-line-count
};
