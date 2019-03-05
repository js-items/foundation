import { BaseError } from "make-error";

export default class ConflictingItemError extends BaseError {

  public readonly itemName: string;
  public readonly itemId: string;
  
  public constructor(itemName: string, itemId: string){
    super();
    this.itemName = itemName;
    this.itemId = itemId;
  }
}
