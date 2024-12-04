import { product } from "../data/productos";

export const getProductos = () => {
    return product;
}

export const calculateTotal = (items) => {
   return items.reduce((accumalator, item) => accumalator + item.product.price * item.quantity, 0);
}