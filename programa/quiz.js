//@ts-check
import { Pregunta } from "./Pregunta.js";

export class Quiz { 

    preguntaIndex=0;
    puntaje=0;

    /**
     *
     * @param {Pregunta[]} preguntas 
     */
    constructor (preguntas) { 
        this.preguntas = preguntas;
    }

    /**
     * 
     * @returns {Pregunta}
     */
    enQuePreguntaVa() {
        return this.preguntas[this.preguntaIndex];
    }

    fin(){
        return this.preguntas.length === this.preguntaIndex;
    }

    adivinar(respuesta) {
        
        if (this.enQuePreguntaVa().respuestaCorrecta(respuesta)) {
            this.puntaje++
        }

        this.preguntaIndex++
    }
}