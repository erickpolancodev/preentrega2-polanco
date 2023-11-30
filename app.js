/**
 * 1 - El usuario va a ingresar su nombre y apellido
 * 2 - El programa lo dejara seleccionar cual es el item a agregar al carrito
 * 3 - El programa le brindara el ticket final
 * 
 */
let nombre;
let tienda = '';
let agregar;
let continuar = 'si';
let ticket = '';
let total = 0;
const carrito = [];


const productos = [
    new Producto('Macbook Pro M3', 'Apple', '256 GB', 1700),
    new Producto('Macbook Air 14"', 'Apple', '512 GB', 1100),
    new Producto('TUF Gaming i7"', 'Asus', '512 GB', 1600),
    new Producto('iPhone 15 Pro Max', 'Apple', '256 GB', 1200),
    new Producto('RogPhone 5', 'Asus', '512 GB', 900),
    new Producto('Galaxy Flip 5', 'Samsung', '256 GB', 970),
    new Producto('Phone 2', 'Nothing', '128 GB', 480),
];

function carritoDeCompra(){

    productos.forEach((prod,index) =>{
        tienda = tienda + `${index+1} - ${prod.marca} ${prod.nombre} ${prod.capacidad} USD ${prod.precio} \n`;
    });

    function suma(producto){
        total = total + producto.precio;
    }
    
    do{
        agregar = +prompt(`PRODUCTOS \n ${tienda}\n ¿Que producto desea agregar a su carrito? `);
    
        if(agregar > 0 && agregar <= productos.length){
            carrito.push(productos[agregar - 1]);
        }
        
        suma(productos[agregar - 1]);
    
    
        continuar = prompt(`Desea seguir agregando productos al carrito? si/no`).toLocaleLowerCase();
    
    }while(continuar === 'si')
    
    carrito.forEach((producto)=>{
        ticket = ticket + ` ${producto.marca} ${producto.nombre} - $USD ${producto.precio}\n `;
    })
    
    alert(`${nombre} su pedido es: \n\n ${ticket}\n  total de USD ${total}`);

}

nombre = prompt('Bienvenidos a TechStore C.A \n Por favor, ingrese su Nombre y Apellido:');

carritoDeCompra();

