import { BaseError } from "make-error";
export default class ConflictingItemError extends BaseError {
    readonly itemName: string;
    readonly itemId: string;
    constructor(itemName: string, itemId: string);
}
