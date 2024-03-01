import { NextFunction, Request, Response } from "express";
import productsRepository from "../repository/products.repository";

export default class ProductController {

    constructor() {}

    public getAllProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products = productsRepository.getAllProducts();
            res.json(products).status(200);
        } catch (error) {
            console.error(error);
            next();
        }
    }

    public getProductById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = productsRepository.getProductById(id);
            if (!product) res.json({message: `Product with id: ${id} not found`}).status(404);
            res.json(product).status(200);
        } catch (error) {
            console.error(error);
            next();
        }
    }

    public createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const product = productsRepository.getProductById(req.body.productid);
            if (product) res.json({message: `Product with id: ${req.body.productid} already exist`}).status(400);
            const data = productsRepository.createProduct(req.body);
            res.json(data).status(200);
        } catch (error) {
            console.error(error);
            next();
        }
    }

    public updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = productsRepository.getProductById(id);
            if (!product) res.json({message: `Product with id: ${id} not found`}).status(404);
            const data = productsRepository.updateProduct(req.body);
            res.json(data).status(200);
        } catch (error) {
            console.error(error);
            next();
        }
    }
}