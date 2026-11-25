class Vuelo(val codigo: String, val destino: String) {
    fun mostrarInformacion() {
        println("Vuelo $codigo con destino a $destino")
    }
}

fun main() {
    val vuelo = Vuelo("AV101", "Quito")
    vuelo.mostrarInformacion()
}
