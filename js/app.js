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

//Formulario index

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

var exampleModal = document.getElementById("exampleModal");
var modalTitle = exampleModal.querySelector(".modal-title");
var modalBodyInput = exampleModal.querySelector(".modal-body");

function enviar_formulario() {
  let nombre = document.getElementById("nombre").value;

  let edad = document.getElementById("edad").value;

  let peso = document.getElementById("peso").value;

  let altura = document.getElementById("altura").value;

  let anio_nacimiento = document.getElementById("anio_nacimiento").value;

  let dni = document.getElementById("dni").value;

  let genero = document.getElementById("genero").value;

  const persona1 = new Persona(
    nombre,
    edad,
    dni,
    genero,
    peso,
    altura,
    anio_nacimiento
  );

  console.log(persona1.mostrarGeneracion);

  modalTitle.textContent = "Tu generaración es:";
  modalBodyInput.textContent = persona1.mostrarGeneracion;
}
