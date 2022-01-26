export class Pregunta {
    constructor(texto, opcion, respuesta){
        this.texto = texto;
        this.opcion = opcion;
        this.respuesta = respuesta;
    }

    respuestaCorrecta(opcion){
        return opcion === this.respuestas
    }
}
