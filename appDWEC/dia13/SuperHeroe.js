class SuperHeroe {
    constructor(identidadSecreta, colorTraje, superPoderes, cantidadPeso, velocidadVuelo) {
        this.identidadSecreta = identidadSecreta;
        this.colorTraje = colorTraje;
        this.superPoderes = [];
        this.cantidadPeso = cantidadPeso;
    }
}

class SuperHeroeVolador extends SuperHeroe {
    constructor(identidadSecreta, colorTraje, superPoderes, cantidadPeso, velocidadVuelo) {
        super(identidadSecreta,colorTraje,superPoderes,cantidadPeso);
        this.velocidadVuelo = velocidadVuelo;
    }
}