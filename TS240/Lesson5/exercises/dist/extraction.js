"use strict";
// interface ShapeCommon {
//   color: string;
// }
const products = [
    {
        id: 0,
        name: "Sample Product",
        price: 49.99,
        description: 'A sample product for demonstration',
    },
];
function updateProduct(productId, updatedValues) {
    const product = products[productId];
    if (product) {
        Object.assign(product, updatedValues);
        console.log("Product successfully updated");
    }
    else {
        console.log("Product not found");
    }
}
updateProduct(0, {
    name: "Updated Product Name",
    price: 99.99,
});
console.log(products);
