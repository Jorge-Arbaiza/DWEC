var Alumno1 = /** @class */ (function () {
    function Alumno1(n, c, e) {
        this.nombre = n;
        this.curso = c;
        this.edad = e;
    }
    Alumno1.prototype.show = function (nombre, curso, edad) {
        var contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "Nombre=\"" + nombre + "\", Edad=" + edad + ", Curso=" + curso;
    };
    return Alumno1;
}());
window.onload = function () {
    var miAlumno = new Alumno1("Pedro López", "1CFSJ", 18);
    miAlumno.show(miAlumno.nombre, miAlumno.curso, miAlumno.edad);
};
