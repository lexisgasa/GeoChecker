import express from "express";
import morgan from "morgan";
import healthCheck from "./healtCheck/healthCheck.js";
import notFoundError from "./error/notFoundError/notFoundError.js";
import generalError from "./error/generalError/generalError.js";

const app = express();

app.use(morgan("dev"))
app.get("/", healthCheck)
app.use(notFoundError)
app.use(generalError)

export default app;