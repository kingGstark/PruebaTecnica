import { Timestamp } from "rxjs/internal/operators/timestamp";

export interface Message {
    uid: string,
    text: string,
    messageDate: Timestamp<string>,
    id:string
}