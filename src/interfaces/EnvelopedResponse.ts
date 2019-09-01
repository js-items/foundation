export interface OutgoingHttpHeaders {
  [header: string]: number | string | string[] | undefined;
}

export default interface EnvelopedResponse<T> {
  readonly status: number;
  readonly body: T;
  readonly headers: OutgoingHttpHeaders;
}
