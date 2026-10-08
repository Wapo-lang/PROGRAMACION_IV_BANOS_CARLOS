let nivel: number = 5;
let poder: number = 18;
if (nivel < 5) {
    console.log("El charmander puede evolucionar a Charmaleon");
}

//condicionales de 2 o mas caminos 
if (nivel >= 16) {
    console.log("El charmander no puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charizard");
}

//condicionales multipls o varios caminos
if (nivel >= 16) {
    console.log("El charmander no puede evolucionar a Charizard");
} else if (nivel >=8) {
    console.log("El charmander puede evolucionar a Charmaleon");
} else {
    console.log("El charmander no puede evolucionar a Charizard ni a charmaleon");
}

//condicionales anidados
if (nivel >= 16) {
    console.log("El charmander no puede evolucionar a Charizard");
} else {
    if (nivel >=8) {
        console.log("El charmander puede evolucionar a Charmaleon");
    } else {
        console.log("El charmander no puede evolucionar a Charizard ni a charmaleon");
    }
}

//condicional if con operadores logicos
if (nivel >= 8 && nivel <= 16) {
    console.log("El charmander puede evolucionar a Charmaleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
   console.log("El charmander no puede evolucionar a Charizard ni a charmaleon"); 
}

nivel = 5;
poder = 18;
//condicional if con operadores logicos or
if (nivel >= 8 || poder >= 20) {
    console.log("El charmander puede evolucionar a Charmaleon");
} else if (nivel >= 16) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
   console.log("El charmander no puede evolucionar a Charizard ni a charmaleon"); 
}