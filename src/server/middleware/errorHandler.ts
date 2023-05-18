import { Request, Response, NextFunction } from "express";


const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
   const error = new Error(`${req.method} ${req.originalUrl} not found.`)
   error['status'] = 404 //add 'status' property to Error object 
   next(error)
};

const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
   res.status(error['status'] || 500)
   res.json({ error: error.message })
}

export { notFoundHandler, globalErrorHandler };
