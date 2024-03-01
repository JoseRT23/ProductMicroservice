import { readFile, writeFile } from "fs/promises";
import { Product } from "../interfaces/product.interface";

export class ProductModel {

    public products: any[] = [];
    private _path: string = "./db/product.json";

    constructor() {
        this.setFile();
    }

    public async setFile(): Promise<void> {
        const file = await readFile(this._path, "utf-8");
        if (!file) return;
        this.products = JSON.parse(file);
    }

    public async createProduct(product: Product) {
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
}