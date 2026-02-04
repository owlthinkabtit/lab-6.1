import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    getPriceWithTax() {
        return this.price * 1.1;
    }
}
