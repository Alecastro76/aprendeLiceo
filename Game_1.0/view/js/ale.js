class Docente {
    constructor(numeroEmpleado, nombre, apellidoPaterno, apellidoMaterno, area, user, pass) {
        this._numeroEmpleado = numeroEmpleado,
            this._nombre = nombre,
            this._apellidoPaterno = apellidoPaterno,
            this._apellidoMaterno = apellidoMaterno,
            this._area = area,
            this._user = user,
            this._pass = pass
    }
    setnumeroEmpleado(numeroEmpleado) {
        this._numeroEmpleado = numeroEmpleado;
    };
    getnumeroEmpleado() {
        return this._numeroEmpleado;
    };
    setNombre(nombre) {
        this._nombre = nombre;
    };
    getNombre() {
        return this._nombre = nombre;
    };
    setapellidoPaterno(apellidoPaterno) {
        this._apellidoPaterno = apellidoPaterno;
    };
    getapellidoPaterno() {
        return this._apellidoPaterno;
    };
    setapellidoMaterno(apellidoMaterno) {
        this._apellidoMaterno = apellidoMaterno;
    };
    getapellidoMaterno() {
        return this._apellidoMaterno;

    };

    setarea(area) {
        this._area = area;
    };
    getarea() {
        return this._area = area;
    };

    setpass(pass) {
        this._pass = pass;
    };
    getpass() {
        return this._pass = pass;
    };


}





