class Vuelo {
    private var pasajerosAbordados = 0

    fun abordar(cantidad: Int) {
        if (cantidad > 0) {
            pasajerosAbordados += cantidad
        } else {
            println("La cantidad debe ser mayor que cero")
        }
    }

    fun mostrarPasajeros() {
        println("Pasajeros abordados: $pasajerosAbordados")
    }
}

fun main() {
    val vuelo = Vuelo()
    vuelo.abordar(120)
    vuelo.mostrarPasajeros()
}
