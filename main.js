//@ts-check
import { preguntas } from "./programa/preguntas.js";
import { Quiz } from "./programa/quiz.js";
import { Interaccion } from "./programa/Interaccion.js";


const cargarPagina = (quiz, interaccion) => {
    if (quiz.fin()) {
        interaccion.misPuntos(quiz.puntaje)
    } else {
        console.log(quiz)
        interaccion.elegirPregunta(quiz.enQuePreguntaVa().texto);
        interaccion.miProgreso(quiz.preguntaIndex +1 , quiz.preguntas.length)
        interaccion.misOpciones(quiz.enQuePreguntaVa().opcion, (opcionActual) => {quiz.adivinar(opcionActual);
        cargarPagina(quiz, interaccion)});
    }
}

function principal() {
    const quiz = new Quiz(preguntas);
    const interaccion = new Interaccion();
        
    cargarPagina(quiz, interaccion)
} 

principal() 