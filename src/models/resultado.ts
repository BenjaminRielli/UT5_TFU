
export class Resultado {
    protected puntajes: Map<string, number> = new Map();

    /**
     * La forma clásica de calcular el resultado final para un equipo o particpante es la suma de sus puntajes
     */
    public devolverPuntajeFinal() {
        var valorFinal: number = 0;
        this.puntajes.forEach((value, key) => {
            valorFinal = valorFinal + value;
        });
        return valorFinal;
    }

    /**
     * 
     * @param idJuez id del juez que hizo la calificación
     * @param datos  los datos que correspondan para hacer una calificación
     * el caso default o el básico, sería una suma de los datos que recibimos, asumiendo que osn 
     * valores númericos
     */
    public registrarPuntaje(idJuez: string, datos: Array<Object>) {
        let valorAIngresar = 0;
        for (let i = 0; i < datos.length; i++) {
            valorAIngresar += Number(datos[i]);
        }

        // Registramos el puntaje
        this.puntajes.set(idJuez, valorAIngresar);
    }

}
