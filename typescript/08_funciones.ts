// Funciones Simples
function sumarCreditos(credito1: number, credito2: number): number {
  return credito1 + credito2;
}

const totalCreditos: number = sumarCreditos(10, 20);
console.log(`Total de créditos: ${totalCreditos}`);

// Sin devolver un valor
function mostrarCentroDeEntrenamiento(nombre: string): void {
  console.log(`Centro de entrenamiento: ${nombre}`);
  const naves: string[] = ["X-Wing", "TIE Fighter", "Millennium Falcon"];
  for (const nave of naves) {
    console.log(`Nave disponible: ${nave}`);
  }
}

mostrarCentroDeEntrenamiento("Jedi Academy");

// Funciones con parámetros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
  if (nivel) {
    console.log(`El Jedi ${nombre} está entrenando en el nivel ${nivel}.`);
  } else {
    console.log(`El Jedi ${nombre} está entrenando.`);
  }
}

entrenarJedi("Luke Skywalker", 5);
entrenarJedi("Yoda");

// FUNCIONES FLECHA
function potenciarFuerza(fuerza: number): number {
  return fuerza * 2;
}

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal: number = 50;
const fuerzaPotenciada: number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada:${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha: number = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (flecha):${fuerzaPotenciadaFlecha}`);
