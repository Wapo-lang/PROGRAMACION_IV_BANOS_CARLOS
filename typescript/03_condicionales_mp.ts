let capacidad: number = 5;
let retraso: number = 18;

if (capacidad < 5) {
    console.log("El vuelo tiene prioridad baja para salir.");
}

// condicionales de 2 o más caminos
if (capacidad >= 16) {
    console.log("El vuelo puede despegar con prioridad alta.");
} else {
    console.log("El vuelo necesita revisión antes del despegue.");
}

// condicionales múltiples o varios caminos
if (capacidad >= 16) {
    console.log("El vuelo puede despegar con prioridad alta.");
} else if (capacidad >= 8) {
    console.log("El vuelo tiene prioridad media.");
} else {
    console.log("El vuelo tiene prioridad baja y requiere autorización.");
}

// condicionales anidados
if (capacidad >= 16) {
    console.log("El vuelo puede despegar con prioridad alta.");
} else {
    if (capacidad >= 8) {
        console.log("El vuelo tiene prioridad media.");
    } else {
        console.log("El vuelo tiene prioridad baja y requiere autorización.");
    }
}

// condicional if con operadores lógicos
if (capacidad >= 8 && capacidad <= 16) {
    console.log("El vuelo tiene prioridad media.");
} else if (capacidad >= 16) {
    console.log("El vuelo tiene prioridad alta.");
} else {
    console.log("El vuelo tiene prioridad baja y requiere autorización.");
}

capacidad = 5;
retraso = 18;

// condicional if con operadores lógicos OR
if (capacidad >= 8 || retraso >= 20) {
    console.log("El vuelo puede continuar con revisión adicional.");
} else if (capacidad >= 16) {
    console.log("El vuelo tiene prioridad alta.");
} else {
    console.log("El vuelo requiere autorización antes de salir.");
}