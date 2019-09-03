import Item from './Item';

export interface PaginationMetadata {
  readonly hasAfter: boolean;
  readonly hasBefore: boolean;
  readonly after: string | null;
  readonly before: string | null;
  readonly totalCount: number;
}
export default interface PaginatedResponse<I extends Item> {
  readonly data: I[];
  readonly pagination: PaginationMetadata;
}
