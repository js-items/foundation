import Cursor from './Cursor';
import Item from './Item';

export interface PaginationMetadata {
  readonly hasAfter: boolean;
  readonly hasBefore: boolean;
  readonly after: Cursor;
  readonly before: Cursor;
  readonly totalCount: number;
}
export default interface PaginatedResponse<I extends Item> {
  readonly data: I[];
  readonly pagination: PaginationMetadata;
}
