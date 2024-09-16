const contenedor = document.getElementById('contenedor');

async function obtenerProductos() {
    try {
        const respuesta = await fetch('https://fakestoreapi.com/products');
        
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.statusText);
        }
        
         const datos = await respuesta.json();
        
        datos.forEach(producto => {
            const productoHTML = `
                <div class="producto">
                    <h2>Nombre: ${producto.title}</h2>
                    <p>Precio: $${producto.price}</p>
                    <img src="${producto.image}" alt="${producto.title}">
                    <p>${producto.description}</p>
                </div>`;
            contenedor.innerHTML += productoHTML;
        })
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        contenedor.innerHTML = '<p>Hubo un problema al cargar los productos.</p>';
    }
}

obtenerProductos();
