class Nave{
    var nombre = ""
    var energia = 0
}

class Pistola (var tipo: String, var disparos: Int = 0){
    fun disparar(){
        println("Disparando para ir a otro Universo")
    }

    fun canarPuedeDespegar(energia : Int = 0){
        var combustible: Int = energia*disparos
        if(combustible>0){
            println("Pistola $tipo tiene potencia para despegar")
        }else{
            println("Pistola $tipo no tiene potencia para despegar")
        }
    }
}

fun main(){
    val nave1=Nave()
    nave1.nombre = "Nave de Rick"
    val nave2=Nave()
    nave2.nombre = "Nave de Morty"
    nave2.energia = 60
    println("${nave1.nombre}: ${nave1.energia}")
    println("${nave2.nombre}: ${nave2.energia}")
    val pistola1=Pistola("Unidireccional", 5)
    val pistola2=Pistola("Bidireccional", 15)
    pistola1.disparar()
    pistola2.disparar()
    println("${pistola1.tipo}")
    println("${pistola2.tipo}")
    pistola1.canarPuedeDespegar(4)
    pistola2.canarPuedeDespegar()
}