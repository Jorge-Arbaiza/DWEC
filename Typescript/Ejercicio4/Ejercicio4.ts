class Alumno1 {
    nombre: string;
    curso: string;
    edad: number;

    constructor(n: string, c: string, e: number) {
        this.nombre = n;
        this.curso = c;
        this.edad = e;
    }

    show(nombre: string, curso: string, edad: number) {
        var contenedor = document.getElementById("contenedor")
        contenedor.innerHTML = "Nombre=\"" + nombre + "\", Edad=" + edad + ", Curso=" + curso;
    }

}

window.onload = () => {
    var miAlumno = new Alumno1("Pedro López", "1CFSJ", 18);
    miAlumno.show(miAlumno.nombre, miAlumno.curso, miAlumno.edad);

};
