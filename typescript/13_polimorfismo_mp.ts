class Boxeador {
    golpear(): void{
        console.log("Golpe Basico")
    }
}

class Rocky extends Boxeador {
    golpeEspecial(): void{
        console.log("Rocky lanza un poderoso gancho")
    }
}

class Apollo extends Boxeador {
    golpeRapido(): void{
        console.log("Apollo lanza un jab veloz")
    }
}

const boxeadores: Boxeador[] = [
    new Rocky(),
    new Apollo()
]
boxeadores.forEach(boxeador=>boxeador.golpear)
