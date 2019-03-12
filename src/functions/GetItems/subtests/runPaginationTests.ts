import Facade from "../../../Facade";
import { Cursor, CursorResult, Pagination, Sort } from "../../../interfaces";
import { start } from "../../../interfaces/Cursor";
import Options from "../../../interfaces/Options";
import { asc } from "../../../interfaces/SortOrder";
import createCursorFromItem from "../../../utils/createCursorFromItem";
import testItem, { TestItem } from "../../utils/testItem";

interface ExpectCorrectResultOptions<T extends TestItem> {
  readonly facade: Facade<T>;
  readonly items: T[];
  readonly after?: Cursor;
  readonly before?: Cursor;
  readonly expectedCursor: CursorResult;
}

const sort: Sort<TestItem> = { id: asc };

const expectCorrectResult = async ({
  after,
  before,
  facade,
  items,
  expectedCursor
}: ExpectCorrectResultOptions<TestItem>) => {
  const pagination: Pagination = {
    after,
    before,
    limit: 1
  };

  const result = await facade.getItems({ pagination, sort });

  expect(result).toEqual({
    cursor: expectedCursor,
    items
  });
};

export default ({ facade }: Options<TestItem>) => {
  const firstId = "id1";
  const secondId = "id2";
  const firstItem = { ...testItem, id: firstId };
  const secondItem = { ...testItem, id: secondId };
  const firstCursor = createCursorFromItem(firstItem, sort);
  const secondCursor = createCursorFromItem(secondItem, sort);

  beforeEach(async() => {
    await facade.deleteItems({
      filter: {}
    });
    await facade.createItem({ id: firstId, item: firstItem });
    await facade.createItem({ id: secondId, item: secondItem });
  });

  it("return all items", async() => {
    const result = await facade.getItems({});
    expect(result).toEqual({
      cursor: {
        after: secondCursor,
        before: firstCursor,
        hasAfter: false,
        hasBefore: false
      },
      items: [firstItem, secondItem]
    });
  });

  it("should return first entity when after is start cursor", async() => {
    await expectCorrectResult({
      after: start,
      expectedCursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      facade,
      items: [firstItem]
    });
  });

  it("should return second item when after is firstCursor", async() => {
    await expectCorrectResult({
      after: firstCursor,
      expectedCursor: {
        after: secondCursor,
        before: secondCursor,
        hasAfter: false,
        hasBefore: true
      },
      facade,
      items: [secondItem]
    });
  });

  it("should return no entities when after is secondCursor", async() => {
    await expectCorrectResult({
      after: secondCursor,
      expectedCursor: {
        after: secondCursor,
        before: secondCursor,
        hasAfter: false,
        hasBefore: true
      },
      facade,
      items: []
    });
  });

  it("should return no items when before is firstCursor", async() => {
    await expectCorrectResult({
      before: firstCursor,
      expectedCursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      facade,
      items: []
    });
  });

  it("should return first entity when before is secondCursor", async() => {
    await expectCorrectResult({
      before: secondCursor,
      expectedCursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      facade,
      items: [firstItem]
    });
  });
  // tslint:disable-next-line:max-file-line-count
};
