import express from "express";
import healthCheck from "./healtCheck/healthCheck.js";

const app = express();

app.get("/", healthCheck)

export default app;