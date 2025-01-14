//evets.js

import { crearProducto, eliminarProducto } from "./api.js";
import { renderizarProductos } from "./main.js";

export const manejarEnvioFormulario = async (e, formulario, listaProductos) => {
  e.preventDefault();

  const nuevoProducto = {
    nombre: formulario["nombre-producto"].value,
    precio: parseFloat(formulario["precio-producto"].value),
    imagen: formulario["imagen-producto"].value,
  };

  await crearProducto(nuevoProducto);
  formulario.reset();
  renderizarProductos(listaProductos);
};

export const manejarClickEliminar = async (e, listaProductos) => {
  if (e.target.classList.contains("icono-eliminar")) {
    const id = e.target.dataset.id;
    await eliminarProducto(id);
    renderizarProductos(listaProductos);
  }
};
