import mongoose from "mongoose";
import User from "../geoChecker/model/User.js";
import bcrypt from "bcrypt";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/geochecker";

export const createAdminUser = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");

    const existingAdmin = await User.findOne({ id: "1" });
    
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("geochecker", 10);

    const adminUser = {
      id: "1",
      company: "GeoChecker",
      name: "admin",
      password: hashedPassword,
      isAdmin: true,
    };

    await User.create(adminUser);

    console.log("Admin user created successfully");
  } catch (error) {
    
    console.error("Error creating admin user:", error);
    throw error;
  }
}; 