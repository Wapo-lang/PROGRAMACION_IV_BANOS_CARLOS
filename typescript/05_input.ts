let inputBuffer = "";
const pendingResolvers: Array<(value: string) => void> = [];

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (chunk: string) => {
    inputBuffer += chunk;
    const lines = inputBuffer.split(/\r?\n/);
    inputBuffer = lines.pop() ?? "";

    for (const line of lines) {
        const resolve = pendingResolvers.shift();
        if (resolve) {
            resolve(line);
        }
    }
});

function prompt(mensaje: string): Promise<string> {
    process.stdout.write(mensaje);

    return new Promise((resolve) => {
        if (inputBuffer.includes("\n") || inputBuffer.includes("\r")) {
            const lines = inputBuffer.split(/\r?\n/);
            inputBuffer = lines.pop() ?? "";
            resolve(lines.shift() ?? "");
            return;
        }

        pendingResolvers.push(resolve);
    });
}

async function main() {
    const personaje = await prompt("Ingrese el nombre del personaje: ");
    const edadInput = await prompt("Ingrese la edad: ");
    const fuerzaInput = await prompt("Ingrese la fuerza: ");

    const edad = Number(edadInput);
    const fuerza = Number(fuerzaInput);

    if (personaje === "Yoda" && edad >= 100 && fuerza >= 90) {
        console.log("Yoda es un maestro Jedi con una fuerza muy alta.");
    } else if (personaje === "Luke" && edad >= 20 && fuerza >= 70) {
        console.log("Luke es un Jedi fuerte y con experiencia.");
    } else if (personaje === "Anakin" && edad >= 18 && fuerza >= 80) {
        console.log("Anakin es muy poderoso, pero tiene un camino peligroso.");
    } else if (edad >= 18 && fuerza >= 60 && (personaje === "Luke" || personaje === "Yoda" || personaje === "Obi Wan")) {
        console.log("El personaje es un Jedi con buena fuerza.");
    } else if (edad < 18 && fuerza < 50) {
        console.log("Es un aprendiz o personaje todavía en entrenamiento.");
    } else {
        console.log("No se reconoce como Jedi con esos datos.");
    }

    if (edad >= 18 && fuerza >= 70 && (personaje === "Luke" || personaje === "Yoda")) {
        console.log("Es un Jedi muy poderoso.");
    } else if (edad >= 18 && fuerza >= 50 && personaje !== "Darth Vader") {
        console.log("Tiene una fuerza aceptable para ser Jedi.");
    } else {
        console.log("No cumple con el nivel mínimo de fuerza para ser Jedi.");
    }

    if ((personaje === "Yoda" || personaje === "Luke") && fuerza >= 80 && edad >= 20) {
        console.log("Es una gran esperanza para la galaxia.");
    } else {
        console.log("Aun necesita entrenamiento.");
    }
}

main();
