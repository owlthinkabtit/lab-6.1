import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    filesize;
    constructor(sku, name, price, filesize) {
        super(sku, name, price);
        this.filesize = filesize;
    }
    get formattedFileSize() {
        return `${this.filesize} MB`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
