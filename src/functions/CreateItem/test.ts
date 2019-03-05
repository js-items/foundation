import ConflictingItemError from "../../errors/ConflictingItemError";
import Options from "../../interfaces/Options";
import testItem, { testId, TestItem } from "../utils/testItem";

export default ({ facade }: Options<TestItem>) => {
  describe("createItem", () => {
    it("creates an item", async () => {
      await facade.createItem({ id: testId, item: testItem });
    });

    it("does not create an item and it throws error instead", async () => {
      expect.assertions(1);
      try {
        await facade.createItem({ id: testId, item: testItem });
        await facade.createItem({ id: testId, item: testItem });
      } catch (e) {
        expect(e).toBeInstanceOf(ConflictingItemError);
      }
    });
  });
};
