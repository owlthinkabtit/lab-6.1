import { Product } from "../models/Product.js";


export function sortByName(products: Product[]): Product[] {
  return [...products].sort((a, b) =>
    a.displayDetails().localeCompare(b.displayDetails()));
}

export function sortByPrice(products: Product[]): Product[] {
  return [...products].sort(
    (a, b) => a.getPriceWithTax() - b.getPriceWithTax()
  );
}