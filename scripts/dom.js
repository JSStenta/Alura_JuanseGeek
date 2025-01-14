//dom.js

export const renderizarTarjetaProducto = (producto) => {
  return `
        <div class="tarjeta">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="tarjeta-imagen"/>
            <div class="tarjeta-contenedor--info">
                <p>${producto.nombre}</p>
                <div class="tarjeta-contenedor--valor">
                    <p>$${producto.precio}</p>
                    <span class="icono-eliminar material-symbols-outlined" data-id="${producto.id}">
                      delete
                    </span>
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
