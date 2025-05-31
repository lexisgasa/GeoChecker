import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Admin } from "../types";


interface AuthRequest extends Request {
  user?: Admin;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecret") as Admin;
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: "Forbidden" });
  }
  
  next();
};
