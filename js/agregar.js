class Elementos {
    constructor(url, categoria, nombre, precio, descripcion) {
        this.url = url;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}
class interfaz{ 
    mostrarProducto(producto){
        const listaProducto = document.getElementById('list_producto');
        const element = document.createElement('div');
        element.innerHTML =`
            <div class="card_geek">
                <img src = "" alt="">: ${producto.url}
                <h2></h2>: ${producto.nombre}
                <p></p>: ${producto.precio}
            </div>
            `
        listaProducto.appendChild(element);
        }
}

function capturarProducto(e){
    e.preventDefault();
    var url = document.forms.list_input["url"].value;
    var categoria = document.forms.list_input["categoria"].value;
    var nombre = document.forms.list_input["nombre"].value;
    var precio = document.forms.list_input["precio"].value;
    var descripcion =document.forms.list_input["descripcion"].value;
    
    const producto = new Elementos(url,categoria, nombre, precio, descripcion);
    const agregar = new interfaz();

    agregar.mostrarProducto(producto);

    
}

