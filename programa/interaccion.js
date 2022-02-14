export class Interaccion {
    constructor(){}

    /**
     * 
     * @param {string} texto 
     */
    elegirPregunta(texto) {
        const tituloDeLaPregunta = document.getElementById('preguntas')
        tituloDeLaPregunta.innerHTML = texto
    }

    /**
     * 
     * @param {string[]} opciones 
     */
    misOpciones(opciones, llamarDeNuevo) {
        const multiplesOpciones = document.getElementById("respuestas")
        multiplesOpciones.innerText = ""

        for (let i=0; i < opciones.length; i++) {
            const button = document.createElement("button");
            button.addEventListener("click", () => llamarDeNuevo(opciones[i]))
            button.className = "botones"
            button.innerHTML = opciones[i]

            multiplesOpciones.append(button)
        }
    }

    misPuntos(puntaje) {
        const puntajeTotal = `
        <h1>Resultado</h1>
        <h2>Tu puntaje es: ${puntaje} </h2>`; 

        const resultado = document.getElementById("tarjeta");
        resultado.innerHTML = puntajeTotal; 
    }

    miProgreso(preguntaIndex, total) {
        let element = document.getElementById("progreso");
        element.innerHTML = `Pregunta ${preguntaIndex} de ${total}` 
    }

}

