class Vehiculo {

    private placa: string;
    private capacidadCarga: number;

    constructor(placa: string, capacidadCarga: number) {
        this.placa = placa;
        this.capacidadCarga = capacidadCarga;
    }

    public obtenerInfo(): string {
        return `Placa: ${this.placa} - Capacidad: ${this.capacidadCarga}kg`;
    }
}

class Etiqueta {

    private codigoBarras: string;
    private fragil: boolean;

    constructor(codigoBarras: string, fragil: boolean) {
        this.codigoBarras = codigoBarras;
        this.fragil = fragil;
    }

    public obtenerAdvertencia(): string {

        if (this.fragil) {
            return "¡CUIDADO: FRÁGIL!";
        } else {
            return "Paquete Estándar";
        }

    }
}

class Paquete {

    private destinatario: string;
    private direccion: string;
    private etiqueta: Etiqueta;

    constructor(
        destinatario: string,
        direccion: string,
        codigoBarras: string,
        fragil: boolean
    ) {

        this.destinatario = destinatario;
        this.direccion = direccion;

        this.etiqueta = new Etiqueta(codigoBarras, fragil);
    }

    public mostrarGuia(): void {

        console.log("===== GUÍA DEL PAQUETE =====");
        console.log(`Destinatario: ${this.destinatario}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(this.etiqueta.obtenerAdvertencia());

    }
}

class Conductor {

    private nombre: string;
    private entregasRealizadas: number;
    private vehiculo: Vehiculo;

    constructor(nombre: string, vehiculo: Vehiculo) {

        this.nombre = nombre;
        this.entregasRealizadas = 0;
        this.vehiculo = vehiculo;
    }

    public mostrarDatos(): void {

        console.log("===== DATOS DEL CONDUCTOR =====");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Entregas realizadas: ${this.entregasRealizadas}`);
        console.log(this.vehiculo.obtenerInfo());

    }
}

// OBJETOS

const vehiculo1 = new Vehiculo("ABC-123", 800);

const conductor1 = new Conductor(
    "Juan Pérez",
    vehiculo1
);

const paquete1 = new Paquete(
    "María López",
    "Av. Principal #123",
    "BAR-990",
    true
);

// MOSTRAR RESULTADOS

conductor1.mostrarDatos();

console.log("");

paquete1.mostrarGuia();