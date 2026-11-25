fun main() {
    val estado = 2

    when (estado) {
        1 -> println("Vuelo programado")
        2 -> println("Vuelo abordando")
        3 -> println("Vuelo en el aire")
        else -> println("Estado de vuelo desconocido")
    }
}
