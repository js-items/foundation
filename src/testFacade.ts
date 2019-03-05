import testCountItems from "./functions/countItems/test";
import testCreateItem from "./functions/createItem/test";
import testDeleteItem from "./functions/deleteItem/test";
import testDeleteItems from "./functions/deleteItems/test";
import testGetItem from "./functions/getItem/test";
import testGetItems from "./functions/getItems/test";
import testReplaceItem from "./functions/replaceItem/test";
import testUpdateItem from "./functions/updateItem/test";
import { TestItem } from "./functions/utils/testItem";
import Options from "./interfaces/options";

export default (options: Options<TestItem>) => {
  describe("testFacade", () => {
    beforeEach(async () => {
      await options.facade.deleteItems({ filter: {} });
    });

    testCountItems(options);
    testCreateItem(options);
    testDeleteItem(options);
    testDeleteItems(options);
    testGetItem(options);
    testGetItems(options);
    testReplaceItem(options);
    testUpdateItem(options);
  });
};
