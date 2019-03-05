import CountItems from "./functions/CountItems";
import CreateItem from "./functions/CreateItem";
import DeleteItem from "./functions/DeleteItem";
import DeleteItems from "./functions/DeleteItems";
import GetItem from "./functions/GetItem";
import GetItems from "./functions/GetItems";
import ReplaceItem from "./functions/ReplaceItem";
import UpdateItem from "./functions/UpdateItem";
import Item from "./interfaces/Item";

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
