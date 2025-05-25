import express from "express";
import morgan from "morgan";
import cors from "cors";
import healthCheck from "./healtCheck/healthCheck.js";
import notFoundError from "./error/notFoundError/notFoundError.js";
import generalError from "./error/generalError/generalError.js";
import { v4 as uuidv4 } from 'uuid';

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

app.post("/api/users", (req, res) => {
  const { company, name, password } = req.body;
  const user = {
    id: uuidv4(),
    company,
    name,
    password,
    createdAt: new Date().toISOString()
  };

  res.status(201).json(user);
});

app.use(notFoundError)
app.use(generalError)

export default app;