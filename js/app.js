/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones: (ver pdf)

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anionacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    if (sexo === "H" || sexo === "M") {
      this.sexo = sexo;
    } else {
      throw new Error("El sexo debe ser H para hombre o M para mujer.");
    }
    this.peso = peso;
    this.altura = altura;
    this.anionacimiento = anionacimiento;
  }

  get mostrarGeneracion() {
    if (this.anionacimiento >= 1930 && this.anionacimiento <= 1948) {
      return "Generación Silenciosa, los niños de la postguerra. Rasgo característico: Austeridad";
    } else if (this.anionacimiento >= 1949 && this.anionacimiento <= 1968) {
      return "Baby Boomers. Rasgo característico: Ambición";
    } else if (this.anionacimiento >= 1969 && this.anionacimiento <= 1980) {
      return "Generación X. Rasgo característico: Obsesión y Éxito";
    } else if (this.anionacimiento >= 1981 && this.anionacimiento <= 1993) {
      return "Generación Y: Millennials. Rasgo característico: Frustración.";
    } else if (this.anionacimiento >= 1994 && this.anionacimiento <= 2010) {
      return "Generación Z. Rasgo característico: Irreverencia.";
    } else {
      return "No se pudo determinar la generación.";
    }
  }

  get esMayorDeEdad() {
    if (this.edad >= 18) {
      return true;
    } else {
      return false;
    }
  }

  get mostrarDatos() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Año de nacimiento: ${this.anionacimiento}`;
  }

  static generarDni() {
    let dni = "";

    for (let i = 0; i < 9; i++) {
      let num_aleatorio = Math.floor(Math.random() * 8) + 1;
      dni = dni + num_aleatorio.toString();
    }

    return dni;
  }
}

const persona1 = new Persona(
  "Juan",
  25,
  Persona.generarDni(),
  "H",
  70,
  1.8,
  1996
);
document.write(persona1.mostrarDatos);
document.write(persona1.mostrarGeneracion);
document.write(persona1.esMayorDeEdad, "<br>");

const persona2 = new Persona(
  "Ana",
  17,
  Persona.generarDni(),
  "M",
  60,
  1.65,
  2005
);
document.write(persona2.mostrarDatos);
document.write(persona2.mostrarGeneracion);
document.write(persona2.esMayorDeEdad, "<br>");

const dniAleatorio = Persona.generarDni();


//Formulario index

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    

    