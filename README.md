# Lab-6.1: TypeScript and Object-Oriented Programming 
**Author:** Jameka Haggins 
---

## Reflection Questions
1. How does TypeScript enforce type safety in this object-oriented program?
2. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
4. If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?
---

TypeScript enforces type safety by requiring specific types for variables, class properties, and method parameters. This helps catch mistakes at compile time, like passing the wrong values or calling methods that don’t exist, before the code ever runs.

Inheritance allowed both `PhysicalProduct` and `DigitalProduct` to share common properties and methods from the `Product` base class. This avoided repeating the same code and let each subclass focus only on what makes it different.

Encapsulation keeps important data protected and prevents it from being changed in unintended ways. Using access modifiers helps control how data is accessed, making the code safer, easier to debug, and easier to maintain.

Polymorphism would allow a new product type to work with the existing system as long as it extends `Product`. The main logic wouldn’t need to change, because it already knows how to work with any product that follows the same structure.
