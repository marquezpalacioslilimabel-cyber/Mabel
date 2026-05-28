class Paquete {

    private destinatario: string;   //PRSONA QUE RECIBE EL PAQUETE
    private direccion: string;      //DIRECCION DE ENTREGA
    private etiqueta: Etiqueta;     //OBJETO TIPO ETIQUETA

    constructor(
        destinatario: string,
        direccion: string,
        codigoBarras: string,
        fragil: boolean
    ) {

        this.destinatario = destinatario;  // GUARDA EL DESTINATARIO
        this.direccion = direccion;        //GUARDA LA DIRECCION

        // COMPOSICIÓN el paquete crea la etiqueta dentro de la clase
        //LA ETIQUETA DEPENDE DEL PAQUETE
        this.etiqueta = new Etiqueta(codigoBarras, fragil);
    }

    public mostrarGuia(): void {//METODO PARA MOSTRAR INFORMAION

        console.log("===== GUÍA DEL PAQUETE =====");
        console.log(`Destinatario: ${this.destinatario}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(this.etiqueta.obtenerAdvertencia()); //LLAMA AL METODO DE LA ETIQUETA

    }
}