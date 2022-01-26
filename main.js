import { preguntas } from "./programa/preguntas.js";
import { Quiz } from "./programa/quiz.js";


function principal() {
    const quiz = new Quiz(preguntas);

    console.log(quiz)
} 

principal() 