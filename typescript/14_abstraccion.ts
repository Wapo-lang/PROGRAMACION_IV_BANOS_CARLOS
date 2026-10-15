abstract class Boxeador {
    abstract atacar(): void;
    descansar(): void{
        console.log("El boxeador recupera energia")
    }
}

class Rocky extends Boxeador {
    atacar(): void {
        console.log("Rocky lanza un gancho")
    }
}

class Apollo extends Boxeador {
    atacar(): void {
        console.log("Apollo lanza un upper")
    }
}

const boxeadores : Boxeador []=[
    new Rocky(),
    new Apollo(),
]
console.log(boxeadores);
boxeadores.forEach(boxeador=>boxeador.atacar());


abstract class Sayajin
    abstract transformarse(): void;
    detectarKi(): void{
        console.log("El boxeador recupera energia")
    }
}