import app from "./app.js";
import chalk from "chalk";

const startServer = (port: number): void => {
    app.listen(port, () => {
        console.log(chalk.cyanBright(`Server is running on port ${port}..`));
      });
}

export default startServer;