interface ParticipanteTorneo {
    nombre: string;
    nivelPoder: number;
    presentarTecnicas(): void;
}

class Goku implements ParticipanteTorneo{
    nombre = "Goku";
    nivelPoder = 9000;
    presentarTecnicas(): void {
        console.log("Goku utiliza el kamehameha");
    }
}

class Vegeta implements ParticipanteTorneo{
    nombre = "Vegeta";
    nivelPoder = 8500;
    presentarTecnicas(): void {
        console.log("Vegeta utiliza el Final Flash");
    }
}

const goku = new Goku();
const vegeta = new Vegeta();

goku.presentarTecnicas();
vegeta.presentarTecnicas();