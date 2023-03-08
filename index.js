//import { nosotros } from "../js/nosotros.js";

//FECHAS..

//primero que nada ponemos fecha de compra !!
const Hoy= new Date()

console.log(Hoy.toDateString())
console.log("Fecha de compra es:"+ " " + Hoy.toDateString())

      



 

//ALERT DE BIENVENIDA..

// swal("Bienvenidos!!".toUpperCase());


//LLAMADO DE MIS ETIQUETAS



console.log(document.getElementsByTagName('h1'));
 console.log( document.getElementsByClassName ("Logotipo"));
//LLAMADO DE ETIQUTAS DEL INDEX

let div = document.getElementById("Inicio");
let parrafo= document.getElementById("parrafoInicio");
let btnCatalogo= document.getElementsByClassName("btnCatalogo");

console.log(div);
console.log(parrafo);
console.log(btnCatalogo);










var carrito = [];


   function init() {
     
     let bebidas =  [
       {
           id: 1,
           foto: "1882.jpg",
           tipo: "Fernet",
           marca: "1882",
           precio: 1740
       }, 
       {
           id: 2,
           foto: "ChandoneAperitif.webp",
           tipo: "Champagne",
           marca: "Chandone Aperitif",
           precio: 2000
       },
       {
           id: 3,
           foto: "beefeter Pink.webp",
           tipo: "Gin",
           marca: "Beefeter Pink",
           precio: 6000
       }, 
       {
        id: 4,
        foto: "beefeter.jpg",
        tipo: "Gin",
        marca: "Beefeter",
        precio: 5500
    },
    {
      id: 5,
      foto: "cocaCola (2).jpg",
      tipo: "Gaseosa",
      marca: "Coca Cola",
      precio: 700
  },
  {
    id: 6,
    foto: "pepsi.jfif",
    tipo: "gaseosa",
    marca: "pepsi",
    precio: 600
}, 
{
  id: 7,
  foto: "Speed.jpg",
  tipo: "energizante",
  marca: "speed",
  precio: 400
}, 
{
  id: 8,
  foto: "Federicode alvear.jfif",
  tipo: "champagne",
  marca: "Federico De Alvear",
  precio: 700
}, 
{
  id: 9,
  foto: "FedericoExtraBrut.webp",
  tipo: "Champagne",
  marca: "Federico Extra Brut",
  precio: 800
}, 
{
  id: 10,
  foto: "FernetBranca.jfif",
  tipo: "Fernet",
  marca: "Branca",
  precio: 2000
}, 
];
   
   llenarCatalogo(bebidas);
     };
  
   function llenarCatalogo(bebidas) {
   
       
   
       const container = document.querySelector(".container");
       bebidas.forEach((element, index) => {
   
           
           container.innerHTML += `
                       <div class="card">
                           <div class="card2" style="background-image: url('../img/${element.foto}'); background-size: cover;background-repeat: no-repeat; "></div> 
                           <b>ID: ${element.id}</b>
                           <p>Nombre: ${element.tipo}</p>
                           <p>Marca: ${element.marca}</p>
                           <p>Precio: $${element.precio}</p>
                           <button class='botonCarrito'>Agregar al Carrito</button>
                       </div>
           `;
   
       })
   
       document.querySelectorAll(".botonCarrito").forEach((boton, index) => {
           boton.addEventListener('click', () => {
               carrito.push(bebidas[index]);
               console.log(carrito);
               swal({
                title: "Producto Agregado al Carrito!",
                text: `${bebidas[index].tipo},\n ${bebidas[index].marca}, \n $${bebidas[index].precio}`,
                icon: "success",
              });
           })
       })
   
   }
 
   
   //Acá comienza la ejecución del código dentro de la sección catálogo
   init();










//FORMULARIO
let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener ("submit", (e)=>{
      e.preventDefault();
      console.log(e.target.name);
      if(e.target[0].name == ""){
      console.log("Error no lleno un campo");
      }
   });


const boton4= document.querySelector("#btn4");
boton4.onclick=()=>{
    console.log("Formulario Enviado");
    //SE AGREGA TOASTIFY LIBRERIA
    Toastify({
        text: "Formulario Enviado",
        offset: {
          x: 350, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 510 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
            background:"linear-gradient(to right,#000000, #8a2be2)"
          }, 
      }).showToast();
    };
   



const button=document.getElementById("cargar");


button.addEventListener("click", async()=>{
  const data= await fetch('http://127.0.0.1:5500/secciones/catalogo.html')
  console.log(data)
  

});

const res=await data.json();

res.results.forEach((el)=>{
  console.log(el);
  lista.innerHTML+=`<li>
  <div class="card">
      <img src="${el.img} ">
      <p>${el.tipo}</p>
  </div>
</li>`;
});
const visualizarBebidas=(lista, el)=>{
  lista.innerHTML +=`<li>
  <div class="card">
      <img src="${el.img} ">
      <p>${el.tipo}</p>
  </div>
</li>`;
};
const lista= document.querySelector("#lista");

button.addEventListener("click", async()=>{
  const data= await fetch('http://127.0.0.1:5500/secciones/catalogo.html');
  const res= await data.json();
  res.results.forEach((el)=>{
    console.log(el);
    visualizarBebidas(lista,el);
  });
});





