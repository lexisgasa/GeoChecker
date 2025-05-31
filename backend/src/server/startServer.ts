import app from "./app.js";
import chalk from "chalk";
import { createAdminUser } from "../scripts/createAdminUser.js";

const startServer = async (port: number): Promise<void> => {
    try {
        await createAdminUser();
        
        app.listen(port, () => {
            console.log(chalk.cyanBright(`Server is running on port ${port}..`));
        });
    } catch (error) {
        console.error(chalk.red("Error starting server:"), error);
        process.exit(1);
    }
}

export default startServer;