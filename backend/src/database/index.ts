import chalk from "chalk"
import mongoose from "mongoose"

const connectToDatabase = async (url: string): Promise<void> => {
    await mongoose.connect(url);
    console.log(chalk.greenBright("Successfully connected to the database"))
}

export default connectToDatabase