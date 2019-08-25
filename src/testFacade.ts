import testCountItems from './functions/CountItems/test';
import testCreateItem from './functions/CreateItem/test';
import testDeleteItem from './functions/DeleteItem/test';
import testDeleteItems from './functions/DeleteItems/test';
import testGetItem from './functions/GetItem/test';
import testGetItems from './functions/GetItems/test';
import testReplaceItem from './functions/ReplaceItem/test';
import testUpdateItem from './functions/UpdateItem/test';
import { TestItem } from './functions/utils/testItem';
import Options from './interfaces/Options';

export default (options: Options<TestItem>) => {
  describe('testFacade', () => {
    beforeEach(async () => {
      await options.facade.deleteItems({ filter: {} });
    });
    if (options.facade.countItems !== undefined) {
      testCountItems(options);
    }
    testCreateItem(options);
    testDeleteItem(options);
    testDeleteItems(options);
    testGetItem(options);
    testGetItems(options);
    testReplaceItem(options);
    testUpdateItem(options);
  });
};
