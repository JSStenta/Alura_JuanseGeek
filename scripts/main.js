//main.js

import { obtenerProductos } from "./api.js";
import { renderizarTarjetaProducto, limpiarListaProductos, agregarProductoAlDOM, } from "./dom.js";
import { manejarEnvioFormulario, manejarClickEliminar } from "./events.js";

const listaProductos = document.querySelector(".lista-productos");
const formularioProducto = document.getElementById("formulario-producto");

/**
 * Renderiza todos los productos en el DOM
 */
export const renderizarProductos = async () => {
    limpiarListaProductos(listaProductos);
    const productos = await obtenerProductos();

    productos.forEach((producto) => {
        const productoHTML = renderizarTarjetaProducto(producto);
        agregarProductoAlDOM(listaProductos, productoHTML);
    });
};

/**
 * Inicializa la aplicación
 */
const init = () => {
    // Renderizar productos iniciales
    renderizarProductos();

    // Capturar eventos del formulario
    formularioProducto.addEventListener("submit", (e) =>
        manejarEnvioFormulario(e, formularioProducto, listaProductos)
    );

    // Capturar eventos de eliminación
    listaProductos.addEventListener("click", (e) =>
        manejarClickEliminar(e, listaProductos)
    );
};

init();
