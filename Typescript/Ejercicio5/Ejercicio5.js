var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alumno2 = /** @class */ (function () {
    function Alumno2(n, c, e) {
        this.nombre = n;
        this.curso = c;
        this.edad = e;
    }
    Alumno2.prototype.show = function (nombre, curso, edad) {
        var contenedor = document.getElementById("contenedor");
        contenedor.innerHTML = "Nombre=\"" + nombre + "\", Edad=" + edad + ", Curso=" + curso;
    };
    return Alumno2;
}());
var Curso2 = /** @class */ (function (_super) {
    __extends(Curso2, _super);
    function Curso2(n_c) {
        var _this = _super.call(this, "Pedro López", "1CFSJ", 18) || this;
        _this.nombre_curso = n_c;
        return _this;
    }
    Curso2.prototype.mensaje = function (nombre, curso, edad, nombre_curso) {
        alert("Mi nombre es " + nombre + "\n\nTengo " + edad + " años\n\nEstoy en " + curso + " " + nombre_curso);
    };
    return Curso2;
}(Alumno2));
window.onload = function () {
    var miCurso = new Curso2("Primer curso de grado superior de DAW");
    miCurso.mensaje(miCurso.nombre, miCurso.curso, miCurso.edad, miCurso.nombre_curso);
};
