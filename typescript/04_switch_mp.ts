type Vuelo = "MXN-101" | "MAD-204" | "USA-305" | "PAR-412" | "LON-520";

let vuelo: Vuelo = "MAD-204";

switch (vuelo) {
    case "MXN-101":
        console.log("El vuelo MXN-101 sale hacia Ciudad de México.");
        break;
    case "MAD-204":
        console.log("El vuelo MAD-204 sale hacia Madrid.");
        break;
    case "USA-305":
        console.log("El vuelo USA-305 sale hacia Estados Unidos.");
        break;
    case "PAR-412":
        console.log("El vuelo PAR-412 sale hacia París.");
        break;
    case "LON-520":
        console.log("El vuelo LON-520 sale hacia Londres.");
        break;
    default:
        console.log("Vuelo no reconocido.");
}

let codigoVuelo: string = "MAD";
let horario: number = 8;
let retrasado: boolean = true;

switch (true) {
    case (codigoVuelo === "MAD" && horario >= 9 && !retrasado):
        console.log("El vuelo a Madrid está en horario y listo para despegar.");
        break;

    case (horario >= 7 && !retrasado):
        console.log("El vuelo está programado a tiempo.");
        break;

    case (horario >= 4 && retrasado):
        console.log("El vuelo tiene retraso y está en revisión.");
        break;

    case (horario < 4):
        console.log("El vuelo aún no ha sido programado.");
        break;

    default:
        console.log("No se reconoce el estado del vuelo.");
}