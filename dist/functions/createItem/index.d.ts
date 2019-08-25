import Item from '../../interfaces/Item';
export interface Options<I extends Item> {
    readonly id?: string;
    readonly item: I;
}
export interface Result<I extends Item> {
    readonly item: I;
}
export declare type CreateItems<I extends Item> = (options: Options<I>) => Promise<Result<I>>;
export default CreateItems;
