abstract class Vuelo {
    abstract fun iniciarAbordaje()
}

class VueloRegular : Vuelo() {
    override fun iniciarAbordaje() {
        println("Inicia el abordaje del vuelo regular")
    }
}

class VueloRetrasado : Vuelo() {
    override fun iniciarAbordaje() {
        println("El vuelo esta retrasado; espere el anuncio")
    }
}

fun main() {
    val vuelos = listOf(VueloRegular(), VueloRetrasado())
    for (vuelo in vuelos) {
        vuelo.iniciarAbordaje()
    }
}
