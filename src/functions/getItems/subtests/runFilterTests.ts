import Options from "../../../interfaces/options";
import { TestItem } from "../../utils/testItem";
import testUsingFilter, {
  firstItem,
  secondItem
} from "../../utils/testUsingFilter";

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
