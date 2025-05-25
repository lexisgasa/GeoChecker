import express from "express";
import healthCheck from "./healtCheck/healthCheck.js";
import notFoundError from "./error/notFoundError/notFoundError.js";

const app = express();

app.get("/", healthCheck)
app.use(notFoundError)

export default app;