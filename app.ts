import express, { Application } from "express";

import Server from "./src/index";

const app: Application = express();
const port: number = 3001;
const server: Server = new Server(app);

app.listen(port, () => {
    console.info(`Server running in port ${port}`);
});
