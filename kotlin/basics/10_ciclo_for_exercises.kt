data class Portal(
    val nombre: String,
    val energia: Int
)

fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de Expedicion")
    for (viaje in 1..6) {
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Viaje: $viaje")
        println("Costo Original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo Final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto Total de la Expedición %.1f créditos".format(presupuestoTotal))

    println("\n--- Estado de los Portales ---")
    val portales = arrayOf(
        Portal("Tierra", 30),
        Portal("Marte", 65),
        Portal("Saturno", 95),
        Portal("Jupiter", 130),
        Portal("Neptuno", 45),
        Portal("Christian", 86),
        Portal("Cañar", 68)
    )

    val costoViaje = 50
    for (portal in portales) {
        println("Portal: ${portal.nombre}")
        println("Energia: ${portal.energia}")
        when {
            portal.energia < 50 -> {
                println("Estado: INACTIVO")
                println("No se puede realizar el viaje")
            }
            portal.energia < 80 -> {
                println("Estado: OPERATIVO")
            }
            portal.energia < 120 -> {
                println("Estado: ESTABLE")
            }
            else -> {
                println("Estado: ALTA CAPACIDAD")
            }
        }
        if (portal.energia >= costoViaje) {
            val restante = portal.energia - costoViaje
            println("Viaje autorizado")
            println("Energia restante $restante")
        }
    }
}