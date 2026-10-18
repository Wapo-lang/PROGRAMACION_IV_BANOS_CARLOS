class Vuelo {
  public codigo: string;
  public destino: string;
  public pasajeros: number;

  constructor(codigo: string, destino: string, pasajeros: number) {
    this.codigo = codigo;
    this.destino = destino;
    this.pasajeros = pasajeros;
  }

  despegar(): void {
    console.log(`${this.codigo} despegando hacia ${this.destino}.`);
  }

  agregarPasajeros(cantidad: number): void {
    this.pasajeros += cantidad;
    console.log(`${cantidad} pasajeros agregados al vuelo ${this.codigo}.`);
  }
}

const vuelo1 = new Vuelo("MAD-204", "Madrid", 120);
const vuelo2 = new Vuelo("USA-305", "Estados Unidos", 150);

console.log(vuelo1);
console.log(vuelo2);

vuelo1.despegar();
vuelo2.agregarPasajeros(20);
