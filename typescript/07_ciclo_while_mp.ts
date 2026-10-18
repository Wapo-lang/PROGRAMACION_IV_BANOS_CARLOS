let capacidadTerminal = 1024;
let capacidadMaxima = 2048;
while (capacidadTerminal < capacidadMaxima) {
  console.log("Capacidad de la terminal: ", capacidadTerminal);
  capacidadTerminal += 256;
}

let vuelo = 1;
while (vuelo <= 10) {
  console.log("Número de vuelo: ", vuelo);
  vuelo++;
}

let pasajerosAbordados = 0;
let pasajerosConfirmados = 0;
while (pasajerosAbordados < 10) {
  pasajerosAbordados++;
  let confirmado = Math.random() < 0.5;
  if (confirmado) {
    pasajerosConfirmados++;
    console.log(`Pasajero ${pasajerosAbordados}: confirmado. Total confirmados: ${pasajerosConfirmados}`);
  } else {
    console.log(`Pasajero ${pasajerosAbordados}: pendiente. Total confirmados: ${pasajerosConfirmados}`);
  }
}

let revisiones = 0;
do {
    revisiones++;
    console.log(`Revisión número: ${revisiones}`);
} while (revisiones < 5);

interface Avion {
  nombre: string;
  tipo: string;
  capacidad: number;
}

const avionesEscaneados: Avion[] = [
  { nombre: "Boeing 737", tipo: "Nacional", capacidad: 180 },
  { nombre: "Airbus A320", tipo: "Internacional", capacidad: 220 },
  { nombre: "Cessna 172", tipo: "Privado", capacidad: 4 },
  { nombre: "Boeing 787", tipo: "Internacional", capacidad: 250 }
];

let indice = 0;
while (indice < avionesEscaneados.length) {
  const avion = avionesEscaneados[indice];
  if (avion?.tipo === "Internacional") {
    console.log(`Avión: ${avion.nombre}, Tipo: ${avion.tipo}, Capacidad: ${avion.capacidad}`);
    indice++;
    continue;
  }
  if (avion?.capacidad < 100) {
    console.log(`Avión: ${avion.nombre}, Tipo: ${avion.tipo}, Capacidad: ${avion.capacidad}`);
    break;
  }
  indice++;
}

