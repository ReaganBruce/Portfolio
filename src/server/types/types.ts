import { IAdmin } from "../models/authMod";


export interface Payload extends IAdmin {
    username: string,
    password: string
}