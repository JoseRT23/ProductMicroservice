import { readFile, writeFile } from "fs/promises";
import { Product } from "../interfaces/product.interface";

export class ProductModel {
    private _path: string = "./db/product.json";

    constructor() { }

    public async getProducts(): Promise<Product[]> {
        const file = await readFile(this._path, "utf-8");
        if (!file) return [];
        return JSON.parse(file);
    }

    public async createProduct(product: Product): Promise<void> {
        const file = await readFile(this._path, "utf-8");
        if(!file) {
            await writeFile(this._path, JSON.stringify([product]), "utf-8");
            return;
        }
        const parsedFile = JSON.parse(file);
        parsedFile.push(product);
        const parsedData = JSON.stringify(parsedFile);
        await writeFile(this._path, parsedData, "utf-8");
    }

    public async updateProduct(id: string, product: Product): Promise<void>{
        const file = await readFile(this._path, "utf-8");
        const parsedFile: typeof product[] = JSON.parse(file);
        const productIdx: number = parsedFile.findIndex(element => element.productid === Number(id));

        Object.assign(parsedFile[productIdx], product);

        const parsedData = JSON.stringify(parsedFile);
        await writeFile(this._path, parsedData, "utf-8");
    }
}