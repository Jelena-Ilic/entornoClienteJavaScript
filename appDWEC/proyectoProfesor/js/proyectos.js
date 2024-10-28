onload = () => {
    cargarProyectos();
    pintarProyectos(listaProyectos);
    document.getElementById("nuevo").getElementsByTagName("p")[0].addEventListener("click", () => document.getElementById("nuevo").className = "oculto");
}
function mostrarDivNuevoCrear() {
    document.getElementById("nuevo").className = "visible";
    document.getElementById("guardar").className = "visible";
    document.getElementById("salvar").className = "oculto";
}
function volver() {
    location.href = "aterrizaje.html"
}
function imprimir() {
    window.print();
}
function ordenar(campo) {
    listaProyectos.sort((a, b) => {
        if (a[campo] > b[campo]) return 1;
        else return -1;
    });
    pintarProyectos(listaProyectos);
}
var listaProyectos = [];
function cargarProyectos() {
    listaProyectos.push(new Proyecto(1, "Proyecto 1", "Descripcion1", "1", new Date(), new Date(), "Redes", 1000, "Ana Marquez"));
    listaProyectos.push(new Proyecto(2, "Proyecto 2", "Descripcion2", "4", new Date(), new Date(), "IA", 2000, "Ana Marquez"));
    listaProyectos.push(new Proyecto(3, "Proyecto 3", "Descripccion3", "3", new Date(), new Date(), "patata", 3000, "Julia Marquez"));
}

function eliminarProyecto(codigo) {

    var proyecto = listaProyectos.findIndex((element) => element.codigo == codigo);

    if (proyecto != -1) {
        listaProyectos.splice(proyecto, 1);
        pintarProyectos(listaProyectos);
    }

}

function guardarNuevo() {

        let codigo=document.getElementById("codigo").value;
        let nombre=document.getElementById("nombre").value;
        let descri=document.getElementById("descripcion").value;
        let cliente=document.getElementById("cliente").value;
        let fechaIni=document.getElementById("fechaInicio").value;
        let fechaLimi=document.getElementById("fechaLimite").value;
        let tipo=document.getElementById("tipo").value;
        let presu=document.getElementById("presupuestoInicial").value;
        let respon=document.getElementById("responsable").value;

        let proyecto=new Proyecto(codigo,nombre,descri,cliente,fechaIni,fechaLimi,tipo,presu,respon);

        listaProyectos.push(proyecto);


}

function guardarCambios(codigo){

    let codigo=document.getElementById("codigo").value;
    let nombre=document.getElementById("nombre").value;
    let descri=document.getElementById("descripcion").value;
    let cliente=document.getElementById("cliente").value;
    let fechaIni=document.getElementById("fechaInicio").value;
    let fechaLimi=document.getElementById("fechaLimite").value;
    let tipo=document.getElementById("tipo").value;
    let presu=document.getElementById("presupuestoInicial").value;
    let respon=document.getElementById("responsable").value;

    let proyecto=new Proyecto(codigo,nombre,descri,cliente,fechaIni,fechaLimi,tipo,presu,respon);

    var posicion = listaProyectos.findIndex((element) => element.codigo == codigo);

    if(posicion!=-1){
        listaProyectos[posicion]=proyecto;
    }



}

function mostrarDivNuevo(codigo,accion) {
    document.getElementById("nuevo").className = "visible";
    document.getElementById("codigo").value = codigo;
    document.getElementById("guardar").className = "oculto";

    if(accion=="ver"){
        document.getElementById("salvar").className = "oculto";
    } else{
        document.getElementById("salvar").className = "visible";
        document.getElementById("codigo").disabled=true;
    }


    var posicion = listaProyectos.findIndex((element) => element.codigo == codigo);

    if (posicion != -1) {
        document.getElementById("nombre").value = listaProyectos[posicion].nombre;
        document.getElementById("cliente").value = listaProyectos[posicion].cliente;
        document.getElementById("fechaInicio").value = listaProyectos[posicion].fechaInicio;
        document.getElementById("fechaLimite").value = listaProyectos[posicion].fechaLimite;
        document.getElementById("descripcion").value = listaProyectos[posicion].descripcion;
        document.getElementById("tipo").value = listaProyectos[posicion].tipo;
        document.getElementById("responsable").value = listaProyectos[posicion].responsable;
        document.getElementById("presupuestoInicial").value = listaProyectos[posicion].presupuestoInicial;
    }
}

function pintarProyectos(lista) {
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    let texto = "";
    lista.forEach(elemento => {
        texto += `<tr>
            <td>${elemento.codigo}</td>
            <td>${elemento.nombre}</td>
            <td>${elemento.presupuestoInicial}</td>
            <td><img src="./img/papelera.png" alt="" width='40px'; onclick="eliminarProyecto(${elemento.codigo})">
                <img src="./img/lupa.png" alt="" width='40px'; onclick="mostrarDivNuevo(${elemento.codigo},'ver')">
                <img src="./img/lapiz.png" alt="" width='40px'; onclick="mostrarDivNuevo(${elemento.codigo})"></td>
        </tr>`
    });
    tbody.insertAdjacentHTML("beforeend", texto);
}