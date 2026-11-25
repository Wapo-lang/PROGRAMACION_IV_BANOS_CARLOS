open class Vuelo {
    open fun anunciar() {
        println("Vuelo listo para abordar")
    }
}

class VueloNacional : Vuelo() {
    override fun anunciar() {
        println("Abordaje de vuelo nacional")
    }
}

class VueloInternacional : Vuelo() {
    override fun anunciar() {
        println("Abordaje de vuelo internacional")
    }
}

fun main() {
    val vuelos = listOf(VueloNacional(), VueloInternacional())
    for (vuelo in vuelos) {
        vuelo.anunciar()
    }
}
