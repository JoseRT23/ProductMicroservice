import { Application } from "express";
import productRoutes from "./product.routes";

export default class Routes {
    constructor(app: Application) {
        app.use('/api/products', productRoutes);
    }
}