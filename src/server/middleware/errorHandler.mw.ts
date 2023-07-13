import { Request, Response, NextFunction } from "express";


export interface IError extends Error {
   status?: number
}

const notFoundHandler = (req: Request, res: Response, next: NextFunction)  => {
   const error = new Error(`${req.method} ${req.originalUrl} not found.`) as IError
   error['status'] = 404 //add 'status' property to Error object 
   next(error)
};

const globalErrorHandler = (error: IError, req: Request, res: Response, next: NextFunction) => {
   res.status(error['status'] || 500)
   res.json({ error: error.message })
}


export { notFoundHandler, globalErrorHandler };
