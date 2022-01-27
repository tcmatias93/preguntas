import { preguntas } from "./programa/preguntas.js";
import { Quiz } from "./programa/quiz.js";
import { Interaccion } from "./programa/interaccion.js";

const cargarPagina = (quiz, interaccion) => {

    interaccion.elegirPregunta(quiz.enQuePreguntaVa().texto);
    interaccion.misOpciones(quiz.enQuePreguntaVa().opcion, (opcionActual) => {quiz.adivinar(opcionActual);
    cargarPagina(quiz, interaccion)});
}

function principal() {
    const quiz = new Quiz(preguntas);
    const interaccion = new Interaccion();
        
    cargarPagina(quiz, interaccion)
} 

principal() 