fun calcularTotal(costos: List<Int>): Int{
    var total = 0
    for (costo in costos){
        total+=costo
        if (costo>150){
            println("Herramienta costosa")
        }
    }
    return total
}

fun main(){
    val destinos = listOf("Tierra", "Marte", "Saturno")
    var interacion: Int = 1
    for (destino in destinos){
        println("Destino $interacion : $destino")
    }
    val costos = listOf(100,150,200,80,120)
    val total = calcularTotal(costos)
    println("Costo total de herramientas de Christian Cañar: $total")
}