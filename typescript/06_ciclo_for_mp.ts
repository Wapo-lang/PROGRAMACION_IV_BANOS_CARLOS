for (let i = 2; i < 50; i += 5) {
    console.log("Control de salida", i);
}

for (let i = 40; i > 5; i -= 5) {
    console.log("Verificación del vuelo", i);
}

for (let i = 40; i > 0; i -= 5) {
    console.log("Revisión de vuelo", i);
    if (i === 20) {
        console.log("El vuelo ha sido programado correctamente");
        break;
    }
    if (i === 30) {
        console.log("Se interrumpió la revisión por mantenimiento");
        continue;
    }
    console.log(`La revisión del vuelo continúa: ${i}`);
}

const vuelos: string[] = ["MXN-101", "MAD-204", "USA-305", "PAR-412"];
for (let i = 0; i < vuelos.length; i++) {
    console.log(`Vuelo: ${vuelos[i]}`);
}

for (const vuelo of vuelos) {
    console.log(`Vuelo activo: ${vuelo}`);
}

const aeropuerto: string = "Terminal A";
for (const letra of aeropuerto) {
    console.log(`Letra: ${letra}`);
}

interface Avion {
  modelo: string;
  capacidad: number;
  enServicio: boolean;
}

const aviones: Avion[] = [
  { modelo: "Boeing 737", capacidad: 180, enServicio: true },
  { modelo: "Airbus A320", capacidad: 150, enServicio: true },
  { modelo: "Cessna 172", capacidad: 4, enServicio: false },
  { modelo: "Boeing 787", capacidad: 240, enServicio: true }
];

for (const avion of aviones) {
  console.log(`Avión: ${avion.modelo}, Capacidad: ${avion.capacidad}, En servicio: ${avion.enServicio}`);
}

interface Destino {
    nombre: string;
    distanciaKm: number;
    horario: string;
}

const destinos: Destino[] = [
  { nombre: "Madrid", distanciaKm: 7500, horario: "18:45" },
  { nombre: "México", distanciaKm: 3200, horario: "20:10" },
  { nombre: "París", distanciaKm: 6800, horario: "16:30" }
];

for (const destino of destinos) {
  console.log(`Destino: ${destino.nombre}, Distancia: ${destino.distanciaKm} km, Horario: ${destino.horario}`);
}

const terminales: Record<string, number> = {
    "Terminal A": 12,
    "Terminal B": 8,
    "Terminal C": 10
};

for (const [terminal, numero] of Object.entries(terminales)) {
    console.log(`Terminal: ${terminal}, Número de puertas: ${numero}`);
}

interface Pasajero {
    nombre: string;
    destino: string;
    asiento: string;
}

const pasajeros: Pasajero[] = [
    { nombre: "Ana", destino: "Madrid", asiento: "12A" },
    { nombre: "Luis", destino: "París", asiento: "8C" },
    { nombre: "Sofía", destino: "México", asiento: "5B" },
    { nombre: "Mateo", destino: "Londres", asiento: "14D" }
];

for (let i = 0; i < pasajeros.length; i++) {
    console.log(`Pasajero ${i + 1}: ${pasajeros[i].nombre}, destino: ${pasajeros[i].destino}, asiento: ${pasajeros[i].asiento}`);
}

for (const pasajero of pasajeros) {
    console.log(`Pasajero: ${pasajero.nombre} - Destino: ${pasajero.destino} - Asiento: ${pasajero.asiento}`);
}

