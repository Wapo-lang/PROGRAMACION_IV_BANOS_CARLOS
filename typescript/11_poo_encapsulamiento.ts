// Encapsulamiento[cite: 16]
class Jedi {
  private energia: number = 100;

  rayoDeFuerza(danio: number): void {
    if (danio > 0) {
      this.energia = Math.max(0, this.energia - danio);
    }
  }

  consultarEnergia(): number {
    return this.energia;
  }
}

const luck = new Jedi();
luck.rayoDeFuerza(150);
console.log(luck.consultarEnergia());


