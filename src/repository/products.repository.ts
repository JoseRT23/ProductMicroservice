import { Product } from "../interfaces/product.interface";
import { ProductModel } from "../models/product.model";

class ProductsRepository {
    private productModel = new ProductModel();
    constructor() {}

    public getAllProducts() {
        return this.productModel.products;
    }

    public getProductById(id: string) {
        return this.productModel.products.find(prod => prod.id === Number(id));
    }

    public createProduct(product: Product) {
        this.productModel.createProduct(product);
        return {
            created: true,
            product
        }
    }
}

export default new ProductsRepository();