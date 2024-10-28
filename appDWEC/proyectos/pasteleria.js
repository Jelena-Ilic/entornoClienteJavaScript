class Productos{
    constructor(nombre, precio, descripcion, foto){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
        this.foto=foto;
    }

    cambiarPrecio(precio){
        this.precio=precio;
    }

    mostrarProducto(){
        let codigoHTML="<table><tbody>";
            for (campo in this) {
               codigoHTML+=`<tr><td>${campo}</td><td>${this[campo]}</td></tr>`; 
            }
            codigoHTML+="</tbody></table>";
    }
}

async function cargarProductos(nombreJson) {
    var lista = await fetch(nombreJson);
    listaProductos = await lista.json();
    var codigoHTML="";
    listaProductos.forEach(element => {
      
         codigoHTML = "<div class='tarjeta'>";
        for (let campo in element) {
          if(campo=="foto"){
            codigoHTML += `<p><img src="${element[campo]}"alt=""></p>`;
          }else{
          codigoHTML += `<p>${campo}${element[campo]}</p>`;
          }
        }
        codigoHTML += "</div>";
        document.getElementById("productos").insertAdjacentHTML(codigoHTML);
    });
  }