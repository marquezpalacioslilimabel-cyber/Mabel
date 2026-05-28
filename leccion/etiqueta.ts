class Etiqueta {
    
    private codigoBarras: string;//GUARDA EL CODIGO EN BARRAS
    private fragil: boolean;//GUARDA SI EL PAQUETE ES FRAGIL//BOOLEAN TRUE O FALSE

    constructor(codigoBarras: string, fragil: boolean) { // CONSTRUCTOR
        this.codigoBarras = codigoBarras;  // GUARDA EL CODIGO RECIBIDO
        this.fragil = fragil;             // GUARDA SI ES FRAGIL
    }

    public obtenerAdvertencia(): string {// METODO QUE RETORNA UNA ADVERTENCIA

        if (this.fragil) {                //VERIFICA SI EL PAQUETE ES FRAGIL
            return "¡CUIDADO: FRÁGIL!";   // SI ES TRUE RETORNA 
        } else {
            return "Paquete Estándar";     //SI ES FALSE RETORNA
        }

    }
}