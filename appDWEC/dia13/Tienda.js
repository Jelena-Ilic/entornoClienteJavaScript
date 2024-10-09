class Tienda {
    constructor(nombre,direccion,telefono,listaVehiculos){
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.listaVehiculos=[];
    }

    anadirVehiculo(vehiculo){
        this.listaVehiculos.push(vehiculo);
    }

    cargarVehiculos(){
        let v1=new Vehiculo("Mercedes", "Benz AMG", "Gris", "4587411WWW", 1000, 8, "4 años", "./img/mercedes-benz-amg-gt-front-view.jpg" , 4);
        let v2=new Vehiculo("Ford", "Mondeo", "Rojo", "45871JJL", 2658, 5, "2 años", "./img/ford.jpg" , 4);
        let v3=new Vehiculo("Kia", "Carnival", "Verde", "6582KKL", 12358, 20, "6 años", "./img/kia.jpg" , 4);
        let v4=new Vehiculo("Audi", "A3", "Azul", "25468KKI", 124558745, 156, "8 años", "./img/audi.jpeg" , 4);
        let v5=new Vehiculo("Citroen", "Elysse", "Blanco", "457458CKJ", 9000, 8, "1 año", "./img/citroen.jpg" , 4);


       
        this.anadirVehiculo(v1);
        this.anadirVehiculo(v2);
        this.anadirVehiculo(v3);
        this.anadirVehiculo(v4);
        this.anadirVehiculo(v5);

    }

    mostrarVehiculosEnTabla(){
        let tabla=`<table>
        <thead>Vehiculos</thead><tbody>`
        tabla+="<tr>"
        this.listaVehiculos.forEach((vehiculo)=>{
            for(let propiedad in vehiculo){
                if(propiedad=="foto"){
                    tabla+=`<td>${propiedad}: </td><td><img src="${vehiculo[propiedad]}"/></td>`
                }else{
                tabla+=`<td>${propiedad}: </td><td>${vehiculo[propiedad]}</td>`
                }
                
            }
            tabla+="</tr>"
        })

        tabla+=`</tbody></table>`;

        document.body.insertAdjacentHTML("beforeend", tabla);
    }


}