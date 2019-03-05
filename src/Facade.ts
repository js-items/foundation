import CountItems from "./functions/countItems";
import CreateItem from "./functions/createItem";
import DeleteItem from "./functions/deleteItem";
import DeleteItems from "./functions/deleteItems";
import GetItem from "./functions/getItem";
import GetItems from "./functions/getItems";
import ReplaceItem from "./functions/replaceItem";
import UpdateItem from "./functions/updateItem";
import Item from "./interfaces/item";

export default interface Facade<I extends Item> {
  readonly createItem: CreateItem<I>;
  readonly getItem: GetItem<I>;
  readonly getItems: GetItems<I>;
  readonly deleteItem: DeleteItem<I>;
  readonly deleteItems: DeleteItems<I>;
  readonly updateItem: UpdateItem<I>;
  readonly replaceItem: ReplaceItem<I>;
  readonly countItems: CountItems<I>;
}
