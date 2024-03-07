import { Product } from "../interfaces/product.interface";
import { ProductModel } from "../models/product.model";

class ProductsRepository {
    private _productModel = new ProductModel();
    constructor() {}

    public async getAllProducts() {
        return await this._productModel.getProducts();
    }

    public async getProductById(id: string) {
        const products = await this._productModel.getProducts();
        return products.find(prod => prod.productid === Number(id));
    }

    public async createProduct(product: Product) {
        await this._productModel.createProduct(product);
        return { created: true, product }
    }

    public async updateProduct(id: string, product: Product) {
        const updatedProduct = await this._productModel.updateProduct(id, product);
        return { updated: true }
    }
}

export default new ProductsRepository();