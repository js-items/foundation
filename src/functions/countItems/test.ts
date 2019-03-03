import Options from "../../interfaces/options";
import { TestItem } from "../utils/testItem";
import testUsingFilter from "../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  describe("countItems", () => {
    testUsingFilter({
      facade,
      toGetAllItems: async filter => {
        const { count } = await facade.countItems({ filter });
        const expectedCount = 2;
        expect(count).toBe(expectedCount);
      },
      toGetFirstItem: async filter => {
        const { count } = await facade.countItems({ filter });
        const expectedCount = 1;
        expect(count).toBe(expectedCount);
      },
      toGetNoItems: async filter => {
        const { count } = await facade.countItems({ filter });
        const expectedCount = 0;
        expect(count).toBe(expectedCount);
      },
      toGetSecondItem: async filter => {
        const { count } = await facade.countItems({ filter });
        const expectedCount = 1;
        expect(count).toBe(expectedCount);
      }
    });
  });
};
