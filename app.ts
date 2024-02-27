import express, { Application } from "express";

const app: Application = express();
const port: number = 3000;

app.listen(port, () => {
    console.info("Server running in port 3000");
});

app.get('/', (req, res, next) => {
    res.send({message: "works"})
})