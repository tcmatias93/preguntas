/* con esta funcion lo que quiero hacer es lograr ingresar una pregunta 
y que la peronsa ponga del 1 al 4 que respuesta considera que esta bie */

/* Con esta constante se acumulan los puntos que va logrando */
let acumuladorPuntos;

function preguntas (pregunta) {
    let preguntaNum = prompt(pregunta);
    let CombertirPreguntaNumero = parseInt(preguntaNum)
    return CombertirPreguntaNumero
}

/* la idea de esta funcion es acumular si la respuesta es corecta que sume 1 punto 
si la respuesta es incorecta que no sume nada */
function sumar (preg1){
    let total=0;
    if (preg1 === 1){
        total = total + 1
    } else{
        alert(total)
        return
    }
    alert(total)
    return total;
}


const preg1 = preguntas("En que ciudad de Estados Unidos tienen su cede el equipo de la NBA \"LOS SPURS\"\n1-San Antonio\n2-Chicago\n3-California\n4-Miami ");

acumuladorPuntos=acumuladorPuntos+sumar(preg1)


sumar(preg1)


