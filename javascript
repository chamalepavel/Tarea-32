// variable paso
let paso = 0;

// funcion para avanzar al siguiente paso
const pasos = () => {
    paso++;
    console.log(" ");
    console.log("============================================");
    console.log(`Paso ${paso}`);
    console.log("--------------------------------------------");
}


// paso 1
pasos();

// clase inicial
// class Surgeon {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// En el constructor Surgeon, antepón a las propiedades name y department un guion bajo (_).
// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


// paso 2
pasos();

// Dentro de constructor(), agrega una propiedad llamada _remainingVacationsDays y configúrala igual a 20.

// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20; // Agregada propiedad de días de vacaciones restantes
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');



// paso 3
pasos();

// Debajo de constructor(), crea un getter llamado name que devuelva el valor guardado en _name.

// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20; // Agregada propiedad de días de vacaciones restantes
//   }
//   get name() {
//     return this._name; // Getter para obtener el nombre del cirujano
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


// paso 4
pasos();

// Debajo de name, crea un getter llamado department que devuelva el valor guardado en _department.

// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20; // Agregada propiedad de días de vacaciones restantes
//   }
//   get name() {
//     return this._name; // Getter para obtener el nombre del cirujano
//   }

//   get department() {
//     return this._department; // Getter para obtener el departamento del cirujano
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');



// paso 5
pasos();

// Debajo del getter department, crea un getter llamado remainingVacationDays que devuelva el valor guardado en _remainingVacationDays.

// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20; // Agregada propiedad de días de vacaciones restantes
//   }
//   get name() {
//     return this._name; // Getter para obtener el nombre del cirujano
//   }

//   get department() {
//     return this._department; // Getter para obtener el departamento del cirujano
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays; // Getter para obtener los días de vacaciones restantes
//   }
// }

// const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
// const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');



// paso 6
pasos();

// Debajo del getter remainingVacationDays, crea un método llamado takeVacationDays que acepte un argumento llamado daysOff.

//Dentro del método, resta daysOff del número guardado en _remainingVacationDays. Establece el resultado en _remainingVacationDays.

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20; // Agregada propiedad de días de vacaciones restantes
  }
  get name() {
    return this._name; // Getter para obtener el nombre del cirujano
  }

  get department() {
    return this._department; // Getter para obtener el departamento del cirujano
  }

  get remainingVacationDays() {
    return this._remainingVacationDays; // Getter para obtener los días de vacaciones restantes
  }

  takeVacationDays(daysOff) {
    if (daysOff <= this._remainingVacationDays){
    this._remainingVacationDays -= daysOff; // Resta los días de vacaciones solicitados
    } else {
        console.log(`No tienes suficientes días de vacaciones. Días restantes: ${this._remainingVacationDays}`);
    }
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


// comprobar resultados
console.log(surgeonRomero.name); // Francisco Romero
console.log(surgeonRomero.department); // Cardiovascular
console.log(surgeonRomero.remainingVacationDays); // 20
surgeonRomero.takeVacationDays(5); // Resta 5 días de vacaciones
console.log(surgeonRomero.remainingVacationDays); // 15

console.log(surgeonJackson.name); // Ruth Jackson
console.log(surgeonJackson.department); // Orthopedics
console.log(surgeonJackson.remainingVacationDays); // 20
surgeonJackson.takeVacationDays(25); // Intenta restar 25 días de vacaciones
console.log(surgeonJackson.remainingVacationDays); // 20 (no se restan porque no hay suficientes días)
