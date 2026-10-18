class Aeronave {
    despegar(): void {
        console.log("La aeronave inicia el despegue.");
    }
}

class AvionComercial extends Aeronave {
    aterrizar(): void {
        console.log("El avión comercial realiza un aterrizaje seguro.");
    }
}

class AvionPrivado extends Aeronave {
    solicitarPermiso(): void {
        console.log("El avión privado solicita permiso para despegar.");
    }
}

const boeing = new AvionComercial();
boeing.despegar();
boeing.aterrizar();

const cessna = new AvionPrivado();
cessna.despegar();
cessna.solicitarPermiso();

class Controlador {
    revisarVuelo(): void {
        console.log("El controlador revisa el estado del vuelo.");
    }
}

class ControladorInternacional extends Controlador {
    autorizarSalida(): void {
        console.log("El controlador internacional autoriza la salida.");
    }
}

class ControladorNacional extends Controlador {
    asignarTerminal(): void {
        console.log("El controlador nacional asigna la terminal del vuelo.");
    }
}

const internacional = new ControladorInternacional();
internacional.revisarVuelo();
internacional.autorizarSalida();

const nacional = new ControladorNacional();
nacional.revisarVuelo();
nacional.asignarTerminal();