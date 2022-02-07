export class Pregunta {
    /**
     * 
     * @param {string} texto 
     * @param {string[]} opcion 
     * @param {string} Pregunta 
     */
    constructor(texto, opcion, respuesta){
        this.texto = texto;
        this.opcion = opcion;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} opcion 
     * @returns {boolean}
     */
    respuestaCorrecta(opcion){
        return opcion === this.respuestas
    }
}
