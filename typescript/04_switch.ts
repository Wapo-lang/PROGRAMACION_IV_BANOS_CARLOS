type Personaje = "Luke Skywalker" | "Leia Organa" | "Han Solo" | "Yoda" | "Anakin Skywalker" | "Darth Vader";

let personaje: Personaje = "Luke Skywalker";

switch (personaje) {
    case "Luke Skywalker":
        console.log("Es un Jedi.");
        break;
    case "Leia Organa":
        console.log("Es una líder de la Alianza Rebelde.");
        break;
    case "Han Solo":
        console.log("Es un contrabandista y piloto.");
        break;
    case "Yoda":
        console.log("Es un maestro Jedi.");
        break;
    case "Anakin Skywalker":
        console.log("Más tarde se convierte en Darth Vader.");
        break;
    case "Darth Vader":
        console.log("Es el antiguo Anakin Skywalker.");
        break;
    default:
        console.log("Personaje no reconocido.");
}

let jedi: string = "Luke";
let nivelFuerza: number = 8;
let tieneSable: boolean = true;

switch (true) {
    case (jedi === "Yoda" && nivelFuerza >= 9 && tieneSable):
        console.log("Yoda es un Maestro Jedi con gran nivel de fuerza y sable láser.");
        break;

    case (nivelFuerza >= 7 && tieneSable):
        console.log("El Jedi está bien entrenado y tiene sable láser.");
        break;

    case (nivelFuerza >= 4 && !tieneSable):
        console.log("El Jedi tiene algo de fuerza, pero aún no tiene sable.");
        break;

    case (nivelFuerza < 4):
        console.log("El Jedi es aún un principiante.");
        break;

    default:
        console.log("No se reconoce al personaje como Jedi.");
}