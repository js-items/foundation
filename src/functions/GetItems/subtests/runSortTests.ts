import Options from "../../../interfaces/Options";
import Sort from "../../../interfaces/Sort";
import { asc, desc } from "../../../interfaces/SortOrder";
import testItem, { TestItem } from "../../utils/testItem";

export default ({ facade }: Options<TestItem>) => {
  const firstId = "id1";
  const secondId = "id2";
  const firstItem = {
    ...testItem,
    id: firstId,
    numberProperty: 1,
    stringProperty: "a"
  };
  const secondItem = {
    ...testItem,
    id: secondId,
    numberProperty: 2,
    stringProperty: "b"
  };

  const assertSort = async (sortedItems: TestItem[], sort?: Sort<TestItem>) => {
    const { items } = await facade.getItems({ sort });
    expect(items).toEqual(sortedItems);
  };

  describe("runSortTests", () => {
    afterEach(async () => {
      await facade.deleteItems({
        filter: {}
      });
    });

    it("should sort by ascending ids when sort is not defined", async () => {
      await facade.createItem({ id: firstId, item: firstItem });
      await facade.createItem({ id: secondId, item: secondItem });
      await assertSort([firstItem, secondItem], undefined);
    });

    it("should sort by one ascending property when entities are ordered", async () => {
      await facade.createItem({ id: firstId, item: firstItem });
      await facade.createItem({ id: secondId, item: secondItem });
      await assertSort([firstItem, secondItem], { stringProperty: asc });
    });

    it("should sort by one ascending property when entities are unordered", async () => {
      await facade.createItem({ id: secondId, item: secondItem });
      await facade.createItem({ id: firstId, item: firstItem });
      await assertSort([firstItem, secondItem], { stringProperty: asc });
    });

    it("should sort by one descending property when entities are ordered", async () => {
      await facade.createItem({ id: secondId, item: secondItem });
      await facade.createItem({ id: firstId, item: firstItem });
      await assertSort([secondItem, firstItem], { stringProperty: desc });
    });

    it("should sort by one descending property when entities are unordered", async () => {
      await facade.createItem({ id: firstId, item: firstItem });
      await facade.createItem({ id: secondId, item: secondItem });
      await assertSort([secondItem, firstItem], { stringProperty: desc });
    });

    it("should sort by two properties when ascending first and descending second", async () => {
      await facade.createItem({ id: firstId, item: firstItem });
      await facade.createItem({ id: secondId, item: secondItem });
      await assertSort([firstItem, secondItem], {
        numberProperty: desc,
        stringProperty: asc
      });
    });

    it("should sort by two properties when descending first and ascending second", async () => {
      await facade.createItem({ id: firstId, item: firstItem });
      await facade.createItem({ id: secondId, item: secondItem });
      await assertSort([secondItem, firstItem], {
        numberProperty: asc,
        stringProperty: desc
      });
    });
  });
};
