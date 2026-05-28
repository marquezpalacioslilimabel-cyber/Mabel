class Conductor {

    private nombre: string;//NOMBRE DEL CONDUCTOR
    private entregasRealizadas: number; //NUMERO DE ENTREGAS REALIZADAS
    private vehiculo: Vehiculo; //OBJETO VEHICULO

    constructor(nombre: string, vehiculo: Vehiculo) { // AQUI
 
        this.nombre = nombre; //GUARDA EL NOMBRE

        // inicia en 0
        this.entregasRealizadas = 0;7 //INICIA ENTREGAS EN 0

        // AGREGACIÓN // EL VEHICULO YA EXISTE AFUERA //EL CONDUCTOR SOLO LO USA
        this.vehiculo = vehiculo;
    }

    public mostrarDatos(): void { //METODO PARA MOSTRAR DATOS

        console.log("===== DATOS DEL CONDUCTOR =====");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Entregas realizadas: ${this.entregasRealizadas}`);
        console.log(this.vehiculo.obtenerInfo());   //USA EL METODO DEL VEHICULO

    }
}