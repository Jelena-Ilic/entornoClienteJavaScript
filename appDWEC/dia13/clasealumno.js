class alumno{
    constructor(nombre,apellidos,Matricula,listaModulos){
        this.nombre=nombre || "Sin nombre";
        this.apellidos=apellidos || "Sin apellidos";
        this.numMatricula=Matricula || "Sin matricula";
        this.listaModulos=listaModulos || [];
    }
    mostrarDetalles(){
        let div=`<div><p>Nombre: ${this.nombre}</p>
        <p>Apellidos: ${this.apellidos}</p>
        <p>Numero de matricula:${this.Matricula}</p>
        <p>Modulos:${this.listaModulos}</p></div>`;
        document.body.insertAdjacentHTML("beforeend",div);
    }
    modificarMatricula(numMatricula){
        this.Matricula=numMatricula;
    }
}