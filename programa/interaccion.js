export class Interaccion {
    constructor(){}

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
            button.innerHTML = opciones[i]
            button.className = "botones"

            button.addEventListener("click", () => llamarDeNuevo(opciones[i]))

            multiplesOpciones.append(button)
        }
    }

    misPuntos(puntaje) {
        const puntajeTotal = `
        <h1>Resultado</h1>
        <h2>Tu puntaje es: ${puntaje} </h2>`; 

        const resultado = document.getElementById("tarjeta");
        document.innerHTML = puntajeTotal; 
    }

}

