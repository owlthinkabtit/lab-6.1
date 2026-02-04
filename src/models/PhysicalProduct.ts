import { Product } from "./Product.js";
import { DiscountableProduct } from "./DiscountableProduct.js";

export class PhysicalProduct extends Product implements DiscountableProduct {
  constructor(
    sku: string,
    name: string,
    price: number,
    private weight: number,
    private quantity: number = 1
  ) {
    super(sku, name, price);
  }
  get formattedWeight(): string {
    return `${this.weight} kg`;
  }
  applyDiscount(percent: number): void {
    this.price = this.price * (1 - percent / 100);
  }
  getPriceWithTax(): number {
    return this.price * 1.1;
  }
}