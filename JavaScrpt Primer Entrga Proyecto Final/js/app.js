

const nuevoDiv = document.createElement('div')
nuevoDiv.innerHTML = '<h1> Nuevo Div </h1>'
nuevoDiv.className = 'card'
console.log(nuevoDiv)


// variables declaradas según el tipo de la ropa.
let vPe = 0;
let vMed = 0;
let vGrand = 0;
let vTotal = 0;
// variables declaradas según el precio de la ropa.
let vPe1 = 3000;
let vMed2 = 5000;
let vGrand3 = 4000;
// variables declaradas según el acumulado de $.
let vPequeAcu = 0;
let vMeDAcu = 0;
let vGrandAcu = 0;
let vTotalAcu = 0;
let promedio = 0;


let eleccionUsuario = prompt('Unica compra de 3 unidades. Elija una prenda entre: remera, buzo y pantalon ').toLowerCase()

let cant = 1;
while (cant <= 3) 
{
do {
    switch (eleccionUsuario) {
        case "remera":
            alert('Elegiste la remera, el valor es de $3000.-')
            vPe++;
            vPequeAcu = vPequeAcu + vPe1
            break;

        case "buzo":
            alert('Elegiste el buzo, el valor es de $5000.-')
            vMed++;
            vMeDAcu = vMeDAcu + vMed2
            break;

        case "pantalon":
            alert('Elegiste el pantalón, el valor es de $4000.-')
            vGrand++;
            vGrandAcu = vGrandAcu + vGrand3
            break;

        default:
            alert('La prenda seleccionada no se encuentra en stock, ingrese un producto de la lista')
            eleccionUsuario = prompt('Elija una prenda entre: remera, buzo, pantalón').toLowerCase()
            break;
    }
} while (eleccionUsuario != "remera" && eleccionUsuario != "buzo" && eleccionUsuario != "pantalon")

function sumar(){

    vTotal = vPe + vMed + vGrand;
    
    alert("El valor total de las " + vTotal + " prendas registradas es de: $" + vTotalAcu);
    
    cant++;
    
    console.log(vTotal)
    
    }

vTotal = vPe + vMed + vGrand;
vTotalAcu = vPequeAcu + vMeDAcu + vGrandAcu;
alert("La cantidad de prendas ingresadas de momento: " + vTotal + " costo: " + vTotalAcu);
cant++;
}
promedio = vTotalAcu / vTotal;





    
    sumar()

const sumarTotalCarrito = () => {
    let sumaTotalCarrito = 0
    for (const producto of carrito) {
        sumaTotalCarrito += producto.precio * producto.cantidad
    }
    return sumaTotalCarrito
}


class Prenda {
    constructor(marca, talle, imgSrc, precio) {
        this.marca = marca
        this.talle = talle
        this.imgSrc = imgSrc
        this.precio = precio
    }
}

const prenda1 = new Prenda('3 Remeras Adidas', "M", 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3893f282e6554687b627aa42015b9a1e_9366/Remeras_Three-Pack_Gris_EC7302_01_laydown.jpg', 3000)
const prenda2 = new Prenda('3 Pantalones Adidas', "M", 'https://scontent.fepa9-2.fna.fbcdn.net/v/t1.6435-9/63056234_629845230758835_2285041881303744512_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=973b4a&_nc_ohc=xK9nQBq8HcgAX_MfRbf&_nc_ht=scontent.fepa9-2.fna&oh=00_AT-eCQQifI8aSgiH56uTseR83fEKxI1NtA9_o_Ypej0LRA&oe=630F9557', 5000)
const prenda3 = new Prenda('3 Buzos Adidas', "M", 'https://i.argentino.com.ar/images/2019/0505/1506096-buzos-nike-y-adidas-por-mayor-20190505210754700.jpg', 4000)

const productos = [prenda1, prenda2, prenda3]

const cardContainerQuery = document.querySelector('#cardContainer')

productos.forEach((producto) => {
    const cardProducto = document.createElement('div')
    cardProducto.innerHTML = `
        <h3 class="cardTitle"> Prenda: ${producto.marca} </h3>
        <img src="${producto.imgSrc}" class="cardImg">
        <p class="cardDesc">  Talle ${producto.talle}</p>
        <span class="cardPrice"> $${producto.precio} </span>
        <button class="buttonCTA"> Agregar al Carrito </button>
    `
    cardProducto.className = 'card'
    cardContainerQuery.append(cardProducto)
})