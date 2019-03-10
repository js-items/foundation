import { start } from "../../../interfaces/Cursor";
import Options from "../../../interfaces/Options";
import Sort from "../../../interfaces/Sort";
import { asc } from "../../../interfaces/SortOrder";
import createCursorFromItem from "../../../utils/createCursorFromItem";
import testItem, { TestItem } from "../../utils/testItem";

export default ({ facade }: Options<TestItem>) => {
  const sort: Sort<TestItem> = { id: asc };
  const firstId = "id1";
  const secondId = "id2";
  const firstItem = { ...testItem, id: firstId };
  const secondItem = { ...testItem, id: secondId };
  const firstCursor = createCursorFromItem(firstItem, sort);
  const secondCursor = createCursorFromItem(secondItem, sort);
  const basePagination = { before: undefined, after: undefined, limit: 1 };

  beforeEach(async () => {
    await facade.deleteItems({
      filter: {}
    });
    await facade.createItem({ id: firstId, item: firstItem });
    await facade.createItem({ id: secondId, item: secondItem });
  });

  it("return all items", async () => {
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

  it("should return first entity when after is start cursor", async () => {
    const pagination = { ...basePagination, after: start };

    const result = await facade.getItems({ pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      items: [firstItem]
    });
  });

  it("should return second entity when after is firstCursor", async () => {
    const pagination = { ...basePagination, after: firstCursor };

    const result = await facade.getItems({ pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: secondCursor,
        before: secondCursor,
        hasAfter: false,
        hasBefore: true
      },
      items: [secondItem]
    });
  });

  it("should return no entities when after is secondCursor", async () => {
    const pagination = { ...basePagination, after: secondCursor };

    const result = await facade.getItems({ pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: secondCursor,
        before: secondCursor,
        hasAfter: false,
        hasBefore: true
      },
      items: []
    });
  });

  it("should return no entities when before is firstCursor", async () => {
    const pagination = { ...basePagination, before: firstCursor };

    const result = await facade.getItems({ pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      items: []
    });
  });

  it("should return first entity when before is secondCursor", async () => {
    const pagination = { ...basePagination, before: secondCursor };

    const result = await facade.getItems({ pagination, sort });

    expect(result).toEqual({
      cursor: {
        after: firstCursor,
        before: firstCursor,
        hasAfter: true,
        hasBefore: false
      },
      items: [firstItem]
    });
  });
// tslint:disable-next-line:max-file-line-count
};