import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../geoChecker/model/User.js';
import { IUser } from '../types';

interface AuthRequest extends Request {
  user?: IUser;
}

interface JwtPayload {
  id: string;
  isAdmin: boolean;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecret') as JwtPayload;
    const user = await User.findById(decoded.id);
    
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });

      return;
    }
    res.status(401).json({ message: 'Invalid token' });
    
    return;
  }
};

export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction): void => {
  if (!req.user?.isAdmin) {
    res.status(403).json({ message: 'Access denied. Admin only.' });
    return;
  }
  next();
}; 