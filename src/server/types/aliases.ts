import { NextFunction, Request, Response } from "express"

export type RequestResponse = (request: Request, response: Response, next: NextFunction) => Promise<void>
export type Passwords = (password: string, hashedPassword?: string) => string | boolean | undefined