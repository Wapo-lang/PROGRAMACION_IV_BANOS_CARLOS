// Funciones simples
function sumarPasajeros(pasajeros1: number, pasajeros2: number): number {
  return pasajeros1 + pasajeros2;
}

const totalPasajeros: number = sumarPasajeros(10, 20);
console.log(`Total de pasajeros: ${totalPasajeros}`);

// Sin devolver un valor
function mostrarTerminal(nombre: string): void {
  console.log(`Terminal del aeropuerto: ${nombre}`);
  const vuelos: string[] = ["MXN-101", "MAD-204", "USA-305"];
  for (const vuelo of vuelos) {
    console.log(`Vuelo disponible: ${vuelo}`);
  }
}

mostrarTerminal("Terminal A");

// Funciones con parámetros opcionales
function registrarVuelo(codigo: string, destino?: string): void {
  if (destino) {
    console.log(`El vuelo ${codigo} tiene destino a ${destino}.`);
  } else {
    console.log(`El vuelo ${codigo} está en espera.`);
  }
}

registrarVuelo("MAD-204", "Madrid");
registrarVuelo("USA-305");

// Funciones flecha
function calcularTiempoEspera(minutos: number): number {
  return minutos * 2;
}

const calcularTiempoEsperaFlecha = (minutos: number): number => minutos * 2;

const minutosOriginales: number = 30;
const tiempoEstimado: number = calcularTiempoEspera(minutosOriginales);
console.log(`Minutos originales: ${minutosOriginales}, Tiempo estimado: ${tiempoEstimado}`);

const tiempoEstimadoFlecha: number = calcularTiempoEsperaFlecha(minutosOriginales);
console.log(`Minutos originales: ${minutosOriginales}, Tiempo estimado (flecha): ${tiempoEstimadoFlecha}`);

// Funciones overloads
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

function formatear(valor: number | string | boolean): string {
  if (typeof valor === "number") {
    return valor.toLocaleString("es.MX", { minimumFractionDigits: 2 });
  }
  if (typeof valor === "boolean") {
    return valor ? "si" : "no";
  }
  return `${valor}`;
}

console.log(formatear(1250.5));
console.log(formatear(true));
console.log(formatear("confirmado"));

// Closures
function crearContador(inicio: number = 0) {
  let cuenta = inicio;
  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor: () => cuenta,
    resetear: () => { cuenta = inicio; }
  };
}

const c1 = crearContador();
const c2 = crearContador(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log(c1.valor());
console.log(c2.valor());

c1.resetear();
console.log(c1.valor());