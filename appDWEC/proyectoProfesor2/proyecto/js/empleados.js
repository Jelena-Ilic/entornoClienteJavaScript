var listaEmpleados=[];

onload=() => {
    cargarEmpleados();
    mostrarEmpleados(listaEmpleados);
}

function cargarEmpleados(){
    listaEmpleados.push(new Empleado(1, "45871599N", "Pedro","Rodriguez Martin","Diseñador","./imagenes/hombre1.png","Activo", 1500, 622154736,"Aqui un bonito parrafo"));
    listaEmpleados.push(new Empleado(2, "58469948J", "Maria","Garcia Marin","Diseñadora","./imagenes/mujer1.png","Activo", 1700, 644852135,"Aqui un bonito parrafo"));
    listaEmpleados.push(new Empleado(3, "65897452P", "Marco","Fernandez Polo","Programador","./imagenes/hombre2.jpg","Activo", 1800, 622587412,"Aqui un bonito parrafo"));
    listaEmpleados.push(new Empleado(4, "21457965L", "Juana","Serran Adria","Jefa de proyecto","./imagenes/mujer2.png","Activo", 2800, 69932548,"Aqui un bonito parrafo"));
    listaEmpleados.push(new Empleado(5, "95487236W", "Miriam","Jimenez Lozano","Programadora","./imagenes/mujer1.png","Activo", 2000, 677458231,"Aqui un bonito parrafo"));
}

function mostrarEmpleados(){
    let tbody=document.getElementsByTagName("tbody")[0];
         tbody.innerHTML="";
        var codigoHtml="";
    listaEmpleados.forEach(empleado => {
        codigoHtml+="<tr>";
        codigoHtml+=`<td><img src="${empleado.foto}" alt="" width="50px";></td>
        <td>${empleado.nombre} ${empleado.apellidos}</td>
        <td>${empleado.puesto}</td>
        <td><img src="./imagenes/papelera.jpg" width="50px" 
                onclick="eliminarProyecto(${empleado.codigo})"/>
                <img src="./imagenes/lapiz.jpg" width="50px" 
                onclick="mostrarDivNuevo(${empleado.codigo},'modificar')"/>
            </td></tr>`;

    })

   tbody.insertAdjacentHTML("beforeend",codigoHtml);

}