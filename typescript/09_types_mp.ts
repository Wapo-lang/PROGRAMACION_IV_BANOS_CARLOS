type ID = string | number;
type Apellido = string;
type Coordenadas = [number, number];
type Punto = {
    x: number;
    y: number;
};

const origen: Punto = { x: 0, y: 0 };
const id: ID = 42;
const id2: ID = "vuelo-001";

type Zona = Punto & {
    z: number;
};

interface Usuario {
    readonly id: number;
    nombre: string;
    email: string;
    avatar?: string;
}

interface Empleado extends Usuario {
    cargo: string;
}

const piloto: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "ana@aeropuerto.com",
};

const agente: Usuario = {
    id: 2,
    nombre: "Luis",
    email: "luis@aeropuerto.com",
    avatar: "avatar.png"
};

console.log(piloto);
console.log(agente);

const supervisor = {
    id: 3,
    nombre: "Pedro",
    email: "pedro@aeropuerto.com",
    cargo: "supervisor de vuelos"
};

const coordenadas: Coordenadas = [12, 45];
const terminal: Zona = { x: 10, y: 20, z: 5 };

console.log(origen);
console.log(id);
console.log(id2);
console.log(coordenadas);
console.log(terminal);