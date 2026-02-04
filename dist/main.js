import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { Product } from "./models/Product.js";
const inventory = [
    new PhysicalProduct("PP01", "Laptop", 1200, 2.5),
    new DigitalProduct("DP01", "E-book", 15, 300),
];
for (const product of inventory) {
    console.log(product.displayDetails());
    console.log(`Final Price: $${calculateTax(product).toFixed(2)}`);
    console.log("----------------");
}
