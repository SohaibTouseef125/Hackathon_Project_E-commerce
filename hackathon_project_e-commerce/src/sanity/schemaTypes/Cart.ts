export const cartSchema = {
    name: "cart",
    type: "document",
    title: "Cart",
    fields: [
        {
            name: "products",
            type: "array",
            title: "Products",
            of: [{ type: "reference", to: [{ type: "product" }] }],
        },
    ],
}