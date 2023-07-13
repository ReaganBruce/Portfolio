import { IAdmin } from "../models/auth.model";


export interface Payload extends IAdmin {
    username: string,
    password: string
}