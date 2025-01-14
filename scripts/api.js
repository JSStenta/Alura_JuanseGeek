const BASE_URL = "http://localhost:3001/productos";

export const obtenerProductos = async () => {
    try {
        const response = await fetch(BASE_URL);
        return await response.json();
    } catch (error) {
        console.error("Error obteniendo productos:", error);
    }
};

export const crearProducto = async (producto) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto),
        });
        return await response.json();
    } catch (error) {
        console.error("Error creando producto:", error);
    }
};

export const eliminarProducto = async (id) => {
    try {
        console.log('Se elimina: ' + id);
        await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    } catch (error) {
        console.error("Error eliminando producto:", error);
    }
};
