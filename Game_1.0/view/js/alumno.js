class Alumno {
    constructor(matricula,nombre,apellidoPaterno,apellidoMaterno,fechaNacimiento,carrera,grado,score,user,pass){
        this.matricula=matricula,
        this.nombre=nombre,
        this.apellidoPaterno=apellidoPaterno,
        this.apellidoMaterno=apellidoMaterno,
        this.fechaNacimiento=fechaNacimiento,
        this.carrera=carrera,
        this.grado=grado,
        this.score=score,
        this.user=user,
        this.pass=pass
    }
    verResultado( ) {
        console.log("Resultado:  "+ this.score)
    }
}
const al1=new Alumno("6789","Alejandra","Castro","Flores","06/10/1976","Informática","6o.","38","acas","1976");

console.log(al1.verResultado());   

