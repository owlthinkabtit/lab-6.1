import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { Product } from "./models/Product.js";
import { sortByName, sortByPrice } from "./utils/sortProducts.js"


const laptop = new PhysicalProduct("PP01", "Laptop", 1200, 12, 5);
laptop.applyBulkDiscount();

const inventory: Product[] = [
  laptop,
  new DigitalProduct("DP01", "E-book", 15, 300),
  new PhysicalProduct("PP02", "headphones", 499, 1, 5),
];

for (const product of inventory) {
  console.log(product.displayDetails());
  console.log(`Final Price: $${calculateTax(product).toFixed(2)}`);
  console.log("----------------");
}

const sortedByPrice = sortByPrice(inventory);

console.log("Sorted by price:");
sortedByPrice.forEach(p =>
  console.log(p.displayDetails())
);
