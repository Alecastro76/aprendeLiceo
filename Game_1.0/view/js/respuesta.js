class Respuesta {
    constructor(numRespuesta,textRespuesta,areaRespuesta,opcionCorrecta,preguntaId){
        this.numRespuesta=numRespuesta,
        this.textRespuesta=textRespuesta,
        this.areaRespuesta=areaRespuesta,
        this.opcionCorrecta=opcionCorrecta,
        this.preguntaId=preguntaId
    }
    verResultado(){
        console.log("Resultado: "+this.score);
    }
}