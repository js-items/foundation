import Options from "../../../interfaces/Options";
import { firstItem, secondItem, TestItem } from "../../utils/testItem";
import testUsingFilter from "../../utils/testUsingFilter";

export default ({ facade }: Options<TestItem>) => {
  testUsingFilter({
    facade,
    toGetAllItems: async filter => {
      const { items } = await facade.getItems({ filter });

      expect(items).toEqual([firstItem, secondItem]);
    },
    toGetFirstItem: async filter => {
      const { items } = await facade.getItems({ filter });

      expect(items).toEqual([firstItem]);
    },
    toGetNoItems: async filter => {
      const { items } = await facade.getItems({ filter });

      expect(items).toEqual([]);
    },
    toGetSecondItem: async filter => {
      const { items } = await facade.getItems({ filter });

      expect(items).toEqual([secondItem]);
    }
  });
};
