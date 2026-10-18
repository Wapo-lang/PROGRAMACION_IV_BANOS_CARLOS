for ( let i = 2; i < 50; i+=5) {
    console.log("Entrenamiento jedi", i);
}

for ( let i = 40; i > 5; i-=5) {
    console.log("Entrenamiento jedi", i);
}

for ( let i = 40; i > 0; i-=5) {
    console.log("Entrenamiento jedi", i);
    if (i === 20) {
        console.log("El entrenamiento jedi ha terminado");
        break;
    }
    if (i === 30) {
        console.log("El entrenamiento jedi ha sido interrumpido");
        continue;
    }
    console.log(`El entrenamiento jedi continúa: ${i}`);
}

const personajes:string [] = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje: ${personajes[i]}`);
}

for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}

const cineMovie: string = "Star Wars: A New Hope";
for (const letra of cineMovie) {
    console.log(`Letra: ${letra}`);
}

interface Jedi {
  nombre: string;
  nivelFuerza: number;
  tieneSable: boolean;
}

const jedis: Jedi[] = [
  { nombre: "Luke Skywalker", nivelFuerza: 100, tieneSable: true },
  { nombre: "Darth Vader", nivelFuerza: 90, tieneSable: true },
  { nombre: "Leia Organa", nivelFuerza: 80, tieneSable: false },
  { nombre: "Han Solo", nivelFuerza: 70, tieneSable: false },
  { nombre: "Yoda", nivelFuerza: 120, tieneSable: true }
];

for (const jedi of jedis) {
  console.log(`Jedi: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable:${jedi.tieneSable}`);
}

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const naves: Nave[] = [
  { nombre: "Nave1", tipo: "velocidad", velocidad:330 },
  { nombre: "Nave2", tipo: "velocidad", velocidad:454}

];

for (const nave of naves) {
  console.log(`Nombre: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad:${nave.velocidad}`);
}

const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
};

interface CriaturaStarWars {
    nombre: string;
    especie: string;
    habitat: string;
}

const criaturasStarWars: CriaturaStarWars[] = [
    { nombre: "Wampa", especie: "Bestia peluda", habitat: "Hoth" },
    { nombre: "Bantha", especie: "Mamut alienígena", habitat: "Tatooine" },
    { nombre: "Rancor", especie: "Depredador gigante", habitat: "La gran guarida" },
    { nombre: "Ewok", especie: "Pequeño guerrero", habitat: "Endor" },
    { nombre: "Yoda", especie: "Maestro Jedi", habitat: "Dagobah" }
];

for (let i = 0; i < criaturasStarWars.length; i++) {
    console.log(`Criatura ${i + 1}: ${criaturasStarWars[i].nombre}, especie: ${criaturasStarWars[i].especie}, habitat: ${criaturasStarWars[i].habitat}`);
}

for (const criatura of criaturasStarWars) {
    console.log(`Criatura: ${criatura.nombre} - Especie: ${criatura.especie} - Habitat: ${criatura.habitat}`);
}

