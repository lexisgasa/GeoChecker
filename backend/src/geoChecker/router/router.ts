import express, { Request, Response } from "express";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  
  if (!isMatch) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }

  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined");
    process.exit(1);
  }

  const token = jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;