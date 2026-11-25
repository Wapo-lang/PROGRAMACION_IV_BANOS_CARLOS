open class Vuelo(val codigo: String) {
    fun mostrarCodigo() {
        println("Codigo de vuelo: $codigo")
    }
}

class VueloInternacional(codigo: String, val destino: String) : Vuelo(codigo) {
    fun mostrarDestino() {
        println("Destino internacional: $destino")
    }
}

fun main() {
    val vuelo = VueloInternacional("AV202", "Lima")
    vuelo.mostrarCodigo()
    vuelo.mostrarDestino()
}
