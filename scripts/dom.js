//dom.js

export const renderizarTarjetaProducto = (producto) => {
  return `
        <div class="tarjeta">
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="tarjeta-contenedor--info">
                <p>${producto.nombre}</p>
                <div class="tarjeta-contenedor--valor">
                    <p>$${producto.precio}</p>
                    <img src="./assets/iconoEliminar.png" alt="Eliminar" class="icono-eliminar" data-id="${producto.id}" />
                </div>
            </div>
        </div>
    `;
};

export const limpiarListaProductos = (listaProductos) => {
  listaProductos.innerHTML = "";
};

export const agregarProductoAlDOM = (listaProductos, productoHTML) => {
  listaProductos.innerHTML += productoHTML;
};
