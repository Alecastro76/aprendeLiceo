class Docente {
    constructor(numEmpleado,nombre,apellidoPaterno,apellidoMaterno,area,user,pass){
        this.numEmpleado=numEmpleado,
        this.nombre=nombre,
        this.apellidoPaterno=apellidoPaterno,
        this.apellidoMaterno=apellidoMaterno,
        this.area=area,
        this.user=user,
        this.pass=pass
    }
    saludar ( ) {
        console.log("Holi soy:  "+ this.nombre + "  " + this.apellidoPaterno);
    }
}
const doc1=new Docente("12345","David","González","Alba","Informática","daga","12345");
console.log(doc1.saludar());    
const doc2=new Docente("34567","Julia","Morales","Villagómez","Informática","Vic","350624");
console.log(doc2.saludar());
