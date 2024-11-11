class Productos {
  constructor(id, nombre, foto, descripcion, precio) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  listaProductos = [];

  cambiarPrecio(precio) {
    this.precio = precio;
  }

}

/*ESTA FUNCIÓN CARGA LAS TARJETAS DE LA PAGINA INICIO USANDO CREATE ELEMENT*/
async function cargarInicio(nombreJson) {
  var lista = await fetch(nombreJson);
  listaProductos = await lista.json();

  listaProductos.forEach(element => {

    let producto=document.createElement("div");
    producto.className="catalogo";
    producto.addEventListener("click", ()=>cambiarPagina(`${element.url}`))
    for(let campo in element){
      if (campo=="foto") {
        let div=document.createElement("div");
        let imagen=document.createElement("img");
        imagen.setAttribute("src",`${element[campo]}`);
        div.appendChild(imagen);
        producto.appendChild(div);
      }else if(campo != "url" && campo != "id"){
        let div=document.createElement("div");
        div.innerHTML=element[campo];
        producto.appendChild(div);
      }

      document.querySelector(".listadoProductos").insertAdjacentElement("beforeend", producto);


  }
    
  });
}

/*ESTA FUNCIÓN ES GLOBAL Y CARGA LOS PRODUCTOS DE TODAS LAS PAGINAS QUE CONTIENEN PRODUCTOS USANDO UNA VARIABLE PARA PODER CAMBIAR EL JSON EN CUESTION*/
async function cargarProductos(nombreJson) {
  var lista = await fetch(nombreJson);
  listaProductos = await lista.json();
  var codigoHTML = "";

  listaProductos.forEach(element => {

    codigoHTML = `<div class='product'>`;
    for (let campo in element) {
      if (campo == "foto") {
        codigoHTML += `<div><img src="${element[campo]}"alt=""></div>`;
      } else if (campo == "precio") {
        codigoHTML += `<div>${campo}: ${element[campo]}</div>`;
      } else if (campo != "url" && campo != "id") {
        codigoHTML += `<div>${element[campo]}</div>`;
      }
    }

    codigoHTML += `<div class="seleccion">Unidades: <select><option>1</option><option>2</option><option>3</option><option>4</option></select><button type="button" onclick="añadirCarrito()" class="botonCarro"><i class="fa-solid fa-cart-shopping"></i></button></div>`;
    codigoHTML += "</div>";
    document.querySelector(".listadoProductos").innerHTML += codigoHTML;
  });
}

/*ESTA FUNCIÓN CARGA LOS PRODUCTOS SALADOS USANDO JQUERY*/
async function cargarSalados(nombreJson) {
  var lista = await fetch(nombreJson);
  listaProductos = await lista.json();
  

  listaProductos.forEach(element => {

    let divContenido=$('<div class="product"></div>').appendTo(".listadoProductos");

    for(let campo in element){
    if(campo=="foto"){
    $(`<div><img src="${element[campo]}"</div>`).appendTo(divContenido);
    }else if (campo == "precio") {
      $(`<div>${campo}: ${element[campo]}</div>`).appendTo(divContenido);
    }else if(campo != "url" && campo != "id"){
    $(`<div>${element[campo]}</div>`).appendTo(divContenido);
    }
  }

  $('<div class="seleccion">Unidades: <select><option>1</option><option>2</option><option>3</option><option>4</option></select><button type="button" onclick="añadirCarrito()" class="botonCarro"><i class="fa-solid fa-cart-shopping"></i></button></div>').appendTo(divContenido);
    
  });
}



/*ESTA FUNCIÓN PERMITE QUE AL PINCHAR LA TARJETA DE INICIO TE ENVIE A SU PAGINA CORRESPONDIENTE*/ 
function cambiarPagina(url) {
  location.href = url;

}