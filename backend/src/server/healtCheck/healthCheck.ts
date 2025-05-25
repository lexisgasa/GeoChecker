import { Request, Response } from "express";

const healthCheck = (_req: Request, res: Response) => {
    res.status(200).json({message: "Server is up"})
}

export default healthCheck;