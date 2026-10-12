let memoriaDroide = 1024;
let memoriaDroideMaxima = 2048;
while (memoriaDroide < memoriaDroideMaxima) {
  console.log("Memoria del droide: ", memoriaDroide);
  memoriaDroide += 256;
}

let nivel = 1;
while (nivel <= 10) {
  console.log("Nivel del droide: ", nivel);
  nivel++;
}

let disparosNave = 0;
let aciertosNave = 0;
while (disparosNave < 10) {
  disparosNave++;
  let acierto = Math.random() < 0.5;
  if (acierto) {
    aciertosNave++;
    console.log(`Disparo ${disparosNave}: ¡Acierto! Total de aciertos: ${aciertosNave}`);
  } else {
    console.log(`Disparo ${disparosNave}: Fallo. Total de aciertos: ${aciertosNave}`);
  }
}

let guerras = 0;
do {
    guerras ++;
    console.log(`Guerra numero: ${guerras}`);
} while (guerras < 5);

interface Nave {
  nombre: string;
  tipo: string;
  velocidad: number;
}

const navesEscaneadas: Nave[] = [
  { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1000 },
  { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
  { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 900 },
  { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 800 }
];

let indice = 0;
while (indice < navesEscaneadas.length) {
  const nave = navesEscaneadas[indice];
  if (nave?.tipo === "Caza estelar") {
    console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad:${nave.velocidad}`);
    indice++;
    continue;
  }
  if (nave?.velocidad < 1000) {
    console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad:${nave.velocidad}`);
    break;
  }
  indice++;
}

