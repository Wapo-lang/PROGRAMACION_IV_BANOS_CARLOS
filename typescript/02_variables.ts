//constantes
const PI: number=3.1416;
const IVA: number=15;
const SERVICIO_API:string="apiService";
const ACTIVE:boolean = true;

console.log("PI: ", PI);
console.log("IVA: ", IVA);
console.log("NOMBRE DEL SERVICIO: ", SERVICIO_API);
console.log("PRODUCTO ACTIVO: ", ACTIVE);

//variables
let contador: number =0;
console.log(contador);
contador= 5;
console.log(contador);
contador ++;
console.log(contador);
contador+= 5;
console.log(contador);
contador= contador + 3;
console.log(contador);
let alumno: string= "Carlos Banos";
let caducado: boolean= false;
console.log(alumno);
console.log(caducado);

let equipo: string[] = ["PIKACHU", "CHARMANDER", "BULBASAUR"];
console.log(equipo);

let pokemonCapturado: string | null = null;
let pokemonInicial: string | undefined;

let experienciaAcumulada: bigint = 43982749832748932n;

//tipo symbol
let pokemon1: symbol = Symbol("Pikachu");
console.log(pokemon1.toString());
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon2.toString());
console.log(pokemon1 === pokemon2);

let pikachu: {
    nombre: string,
    nivel: number,
    vida: number,
    esLegendario: boolean
} = {
    nombre: "Pikachu",
    nivel: 5,
    vida: 35,
    esLegendario: false
};
console.log(pikachu);