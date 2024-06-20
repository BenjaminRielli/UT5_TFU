import { timeStamp } from "console";
import { Resultado } from "./resultado";

export class ResultadoAtletismo extends Resultado {


    /**
     * 
     * @param idJuez id del juez que hizo la calificación
     * @param datos  los datos que correspondan para hacer una calificación
     * el caso default o el básico, sería una suma de los datos que recibimos, asumiendo que son 
     * valores númericos. 
     * Fórmula general para el calculo del puntaje P=A×(B−T) ^ C, siendo A,B y C parametros estblecidos por la organización
     * los cuales a modo de ejmeplo estab
     */
    public registrarPuntaje(idJuez: string, datos: Array<Object>) {

        // En este caso, el arreglo tiene, en primera posición, el puntero que dice cual fue su tiempo entre los demás. 
        // y luego las marcas de los demas en segundos, ordenamos los valores y determinamos en que  puntuación tuvo
        // siendo (por ejemplo) 3 el ganador, 2 al segundo y 1 al tercero, haciendo referencia al ranking y 
        // quednado con más puntaje el ganador de la medalla de oro. 


        let posAtleta: number = Number(datos[0]);
        let tiempos = new Array(datos[1])
        let tiempoAtleta = tiempos[posAtleta];

        let oro = 0;
        let plata = 0;
        let bronce = 0;

        let posOro = 0;
        let posPlata = 0;
        let posBronce = 0;


        for (let i = 0; i < tiempos.length; i++) {
            let tiempoActual = Number(tiempos[i]);

            if (tiempoActual > oro) {
                posOro = i;
                oro = tiempoActual
                continue
            }

            if (tiempoActual > plata) {
                posPlata = i
                plata = tiempoActual
                continue
            }

            if (tiempoActual > bronce) {
                posBronce = i
                bronce = tiempoActual
                continue
            }
        }

        if (posOro == posAtleta || tiempoAtleta == oro) {
            this.puntajes.set(idJuez, 3);
        } else if (posPlata == posAtleta || tiempoAtleta == plata) {
            this.puntajes.set(idJuez, 2);
        } else if (posBronce == posAtleta || tiempoAtleta == bronce) {
            this.puntajes.set(idJuez, 1);
        } else {
            this.puntajes.set(idJuez, 0);
        }


    }

}
