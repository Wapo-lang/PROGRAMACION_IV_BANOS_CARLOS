fun main() {
    val vuelosProgramados = 8
    val vuelosCancelados = 2
    val vuelosActivos = vuelosProgramados - vuelosCancelados
    val puertaDisponible = true

    println("Vuelos activos: $vuelosActivos")
    println("Hay vuelos activos: ${vuelosActivos > 0}")
    println("Se puede asignar puerta: ${vuelosActivos > 0 && puertaDisponible}")
}
