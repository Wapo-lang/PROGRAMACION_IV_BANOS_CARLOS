// Encapsulamiento
class Vuelo {
  private pasajeros: number = 120;

  agregarPasajeros(cantidad: number): void {
    if (cantidad > 0) {
      this.pasajeros = Math.max(0, this.pasajeros + cantidad);
    }
  }

  quitarPasajeros(cantidad: number): void {
    if (cantidad > 0) {
      this.pasajeros = Math.max(0, this.pasajeros - cantidad);
    }
  }

  consultarPasajeros(): number {
    return this.pasajeros;
  }
}

const vuelo = new Vuelo();
vuelo.agregarPasajeros(30);
vuelo.quitarPasajeros(10);
console.log(vuelo.consultarPasajeros());


