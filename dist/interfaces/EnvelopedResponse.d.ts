/// <reference types="node" />
import { OutgoingHttpHeaders } from "http";
export interface EnvelopedResponse<T> {
    readonly status: number;
    readonly body: T;
    readonly headers: OutgoingHttpHeaders;
}
