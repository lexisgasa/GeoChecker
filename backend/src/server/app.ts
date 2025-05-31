import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import healthCheck from "./healtCheck/healthCheck.js";
import notFoundError from "./error/notFoundError/notFoundError.js";
import generalError from "./error/generalError/generalError.js";
import { v4 as uuidv4 } from 'uuid';
import User from "../geoChecker/model/User.js";
import authRoutes from "../geoChecker/router/router.js";
import bcrypt from "bcrypt";
import { authenticate, isAdmin } from "../middleware/auth.js";

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173"
  ],
};

app.use(cors(corsOptions))
app.use(morgan("dev"))
app.use(express.json())

app.get("/", healthCheck)

app.use("/api", authRoutes)

app.post("/api/users", authenticate, isAdmin, async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { company, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: uuidv4(),
      company,
      name,
      password: hashedPassword,
      isAdmin: false
    };

    const createdUser = await User.create(user);
    
    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

app.use(notFoundError)
app.use(generalError)

export default app;