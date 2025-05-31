import { Schema } from "mongoose";
import { IUser } from "../../../types";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  company: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

export default userSchema;