
const divProductos = document.getElementById('productos');

const URL = 'http://localhost:4000/productos';

fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(producto => { 
            const computer = `<div class="producto" >
                                <h2>${producto.nombre}</h2>
                                <p style="color: blue;">${producto.precio}</p>
                                <p style="color: black;">${producto.descripcion}</p>
                              </div>`;
            divProductos.insertAdjacentHTML('beforeend', computer);  
        });
    })
    .catch((err) => console.log(err))