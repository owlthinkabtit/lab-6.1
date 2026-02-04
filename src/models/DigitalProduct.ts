import { Product } from "./Product.js";

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    private filesize: number
  ){
    super(sku, name, price);
  }
  get formattedFileSize(): string {
    return `${this.filesize} MB`;
  }
  getPriceWithTax(): number {
    return this.price;
  }
}