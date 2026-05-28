class Vehiculo {

    // ATRIBUTOS PRIVADOS// PROTEGE LOA ATRIBUTOS 
    //SOLO PUEDEN USARSE DENRO DE LA CLASE
    private placa: string;                      //GUARDA LA PLACA DEL VEHICULO
    private capacidadCarga: number;             //GUARDA LA CAPACIDAD DE CARGA

    // CONSTRUCTOR// SE EJECUTA AUTOMATICAMENTE AL CREAR EL OBJETO
    constructor(placa: string, capacidadCarga: number) {
        this.placa = placa;                      //GUARDA LA PLACA RECIBIDA
        this.capacidadCarga = capacidadCarga;    //GUARDA LA CAPACIDAD RECIBIDA
    }
     //METODO PUBLICO
    // FUNCIÓN
    public obtenerInfo(): string {
        return `Placa: ${this.placa} - Capacidad: ${this.capacidadCarga}kg`; //DEVUELVE INFORMACION
    }
}