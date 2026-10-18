// Constantes del gestor de vuelos
const TERMINAL: string = "T-5";
const TARIFA: number = 25;
const AEROLINEA: string = "SkyJet";
const ACTIVO: boolean = true;

console.log("TERMINAL: ", TERMINAL);
console.log("TARIFA: ", TARIFA);
console.log("AEROLÍNEA: ", AEROLINEA);
console.log("SISTEMA ACTIVO: ", ACTIVO);

// Variables del aeropuerto
let numeroVuelo: number = 101;
console.log(numeroVuelo);
numeroVuelo = 205;
console.log(numeroVuelo);
numeroVuelo++;
console.log(numeroVuelo);
numeroVuelo += 10;
console.log(numeroVuelo);
numeroVuelo = numeroVuelo + 5;
console.log(numeroVuelo);

let destino: string = "Madrid";
let vueloEnHorario: boolean = true;
console.log(destino);
console.log(vueloEnHorario);

let pasajeros: string[] = ["Ana", "Luis", "Sofía", "Mateo"];
console.log(pasajeros);

let pilotoAsignado: string | null = null;
let copilotoAsignado: string | undefined;

let capacidadMaxima: bigint = 180n;

// Tipo symbol
let vuelo1: symbol = Symbol("Vuelo 205");
console.log(vuelo1.toString());
let vuelo2: symbol = Symbol("Vuelo 205");
console.log(vuelo2.toString());
console.log(vuelo1 === vuelo2);

let vuelo: {
    numero: number,
    destino: string,
    horaSalida: string,
    pasajeros: number,
    enHorario: boolean
} = {
    numero: 205,
    destino: "Madrid",
    horaSalida: "18:45",
    pasajeros: 4,
    enHorario: true
};

console.log(vuelo);