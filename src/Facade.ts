import countItems from "./functions/CountItems";
import createItem from "./functions/CreateItem";
import deleteItem from "./functions/DeleteItem";
import deleteItems from "./functions/DeleteItems";
import getItem from "./functions/GetItem";
import getItems from "./functions/GetItems";
import replaceItem from "./functions/ReplaceItem";
import updateItem from "./functions/UpdateItem";
import Item from "./interfaces/item";

export default interface Facade<I extends Item> {
  readonly countItems: CountItems<I>;
  readonly createItem: CreateItem<I>;
  readonly getItem: GetItem<I>;
  readonly getItems: GetItems<I>;
  readonly deleteItem: DeleteItem<I>;
  readonly deleteItems: DeleteItems<I>;
  readonly updateItem: UpdateItem<I>;
  readonly replaceItem: ReplaceItem<I>;
}
