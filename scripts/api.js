import { apiKey } from './config.js';
const BASE_URL = `https://my.api.mockaroo.com/productos.json?key=${apiKey}`;

let productos = [];

export const obtenerProductos = async () => {
    if (productos.length > 0) {
        return productos;
    }
    try {
        const response = await fetch(BASE_URL);
        const productosJSON = await response.json();
        productos = productosJSON.map((producto) => {
            return {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                imagen: producto.imagen,
            };
        });
        return productos;
    } catch (error) {
        console.error("Error obteniendo productos:", error);
    }
};

export const crearProducto = async (producto) => {
    productos.push(producto);
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
        });
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.error("Error creando producto:", error);
    }
};

export const eliminarProducto = async (id) => {
    try {
        console.log('Se elimina: ' + id);
        //await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
        productos = productos.filter((producto) => producto.id !== id);
    } catch (error) {
        console.error("Error eliminando producto:", error);
    }
};
