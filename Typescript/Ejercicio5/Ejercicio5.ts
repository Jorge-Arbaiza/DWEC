class Alumno2 {
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

class Curso2 extends Alumno2{
    nombre_curso: string;

    constructor(n_c: string) {
        
        
        super("Pedro López", "1CFSJ", 18);
        this.nombre_curso = n_c;
    }

    mensaje(nombre: string, curso: string, edad: number, nombre_curso: string) {
        alert("Mi nombre es " + nombre + "\n\nTengo " + edad + " años\n\nEstoy en " + curso + " " + nombre_curso);
    }

}

window.onload = () => {
    
    var miCurso = new Curso2("Primer curso de grado superior de DAW")
    miCurso.mensaje(miCurso.nombre, miCurso.curso, miCurso.edad, miCurso.nombre_curso);

};
