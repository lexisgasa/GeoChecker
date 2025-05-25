import { NextFunction, Request, Response } from "express";
import { ServerError } from "../serverError.js";

const generalError = (error: Error, _req: Request, res: Response, _next: NextFunction):void => {
    const statusCode = (error as ServerError).statusCode ?? 500;

    res.status(statusCode).json({message: error.message})
}

export default generalError;