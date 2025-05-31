import mongoose from "mongoose";
import userSchema from "./schema/userSchema.js";
import { IUser } from "../../types.js";

const User = mongoose.model<IUser>("User", userSchema, "users");

export default User; 