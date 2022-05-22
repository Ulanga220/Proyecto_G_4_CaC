/* 
---------------  Lista de productos a mostrar en la página  -------------------
    * Array [] de productos ( de formato JSON {} )  // JSON: JavaScript Object Notation
*/

const productos = [
    {
        id: 1,
        nombre: "Heladera Patrick 227lt",
        img: "./img/Producto_1.JPG",
        precio: 80000,
        descripcion: "lorem insump 1",
        stock: 10,
        categoria: "electrodomesticos"
    },
    {
        id: 2,
        nombre: "Heladera Patrick 394lt",
        img: "./img/Producto_1.1.JPG",
        precio: 80000,
        descripcion: "lorem insump 2",
        stock: 20,
        categoria: "electrodomesticos"
    },
    {
        id: 3,
        nombre: "Heladera Whirlpool 462lt",
        img: "./img/Producto_1.2.JPG",
        precio: 80000,
        descripcion: "lorem insump 3",
        stock: 30,
        categoria: "electrodomesticos"
    },
    {
        id: 4,
        nombre: "Heladera Patrick 516Lt",
        img: "./img/Producto_1.3.JPG",
        precio: 80000,
        descripcion: "lorem insump 4",
        stock: 40,
        categoria: "electrodomesticos"
    },
    {
        id: 5,
        nombre: "Lavarropas Drean 6Kg",
        img: "./img/Producto_2.JPG",
        precio: 80000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 6,
        nombre: "Lavarropas Longvie 8Kg",
        img: "./img/Producto_2.1.JPG",
        precio: 80000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 7,
        nombre: "Lavarropas Electrolux 6.5kg",
        img: "./img/Producto_2.2.JPG",
        precio: 40000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 8,
        nombre: "Lavarropas Eslabón 7kg",
        img: "./img/Producto_2.3.JPG",
        precio: 40000,
        descripcion: "lorem insump 4",
        stock: 40,
        categoria: "electrodomesticos"
    },
    {
        id: 9,
        nombre: "Cocina Escorial",
        img: "./img/Producto_3.JPG",
        precio: 40000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 10,
        nombre: "Cocina Electrolux",
        img: "./img/Producto_3.1.JPG",
        precio: 90000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 11,
        nombre: "Cocina Longvie",
        img: "./img/Producto_3.2.JPG",
        precio: 90000,
        descripcion: "lorem insump 4",
        stock: 40,
        categoria: "electrodomesticos"
    },
    {
        id: 12,
        nombre: "Cocina Atma",
        img: "./img/Producto_3.3.JPG",
        precio: 90000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 13,
        nombre: "Telefunken TV 32'",
        img: "./img/Producto_4.JPG",
        precio: 90000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 14,
        nombre: "Philips TV 50' UHD 4K",
        img: "./img/Producto_4.1.JPG",
        precio: 90000,
        descripcion: "lorem insump 4",
        stock: 40,
        categoria: "electrodomesticos"
    },
    {
        id: 15,
        nombre: "Sansei Smart TV 50'",
        img: "./img/Producto_4.2.JPG",
        precio: 90000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    },
    {
        id: 16,
        nombre: "LG 4K 65'",
        img: "./img/Producto_4.3.JPG",
        precio: 90000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    }
    
];


// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(productos);

// Guardamos en el localstorage el array JSON convertido de productos en String
localStorage.setItem("productos", productosEnStorage);


let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));



// Creamos un array (carrito)
let carrito = [];

const generarCards = (productos) => {
    // Obtenemos el div que contendra las cards de productos
    let cards = document.getElementById("products");
    // Guardar el valor total de la lista de productos
    let total = 0;

    // Metodos de los Array

    // ForEach: Recorrer el array, y por cada elemento (element)
    productos.forEach( producto => {
        
        total += producto.precio;  // total = total + producto.precio;

        // Creamos la etiqueta Card
        let cardProductos = document.createElement("div");
        cardProductos.className = "card m-3";

        let card = `
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <a class="btn btn-primary" id="cart${producto.id}">Agregar al Carrito</a>
            </div>
        `;
    
        // Escribimos el contenido de la plantilla card en la etiqueta div que creamos (Texto - String)
        cardProductos.innerHTML = card;

        // Append Child nos permite agregar una etiqueta hija dentro de una etiqueta padre
        cards.appendChild(cardProductos);

        let productCard = document.getElementById("cart" + producto.id);

        productCard.addEventListener("click", (evento)=>{
            evento.preventDefault();
            // Agregamos el producto al carrito
            carrito.push(producto);
        });


    });
    guardarEnStorage("precioTotal", total);
    
}


function guardarEnStorage (clave,valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}


generarCards(productos);


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});