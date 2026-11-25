fun main(){
    val portal = 2
    when(portal){
        1 -> println("Destino: Tierra")
        2 -> println("Destino: Marte")
        3 -> println("Destino: Saturno")
        else -> println("Portal No Disponible")
    }

    println("Incluya el día (1-7):")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5->println("Día de experimentos")
        6,7->println("Día de descanso")
        else->println("Día inválido")
    }

    println("Ingrese la energía del Portal:")
    val energia = readLine()!!.toInt()
    when(energia){
        in 0..39->println("Energía baja")
        in 40..79->println("Energía media")
        in 80..100->println("Energía alta")
        else->println("Energía inválida")
    }

    val energiaNuclear = 80
    val motorActivo = true
    val costoViaje = 40
    /* 
        Trabajo con condicionales y comentarios 
        con when
    */
    when{
        energiaNuclear>=costoViaje&&motorActivo->{
            val restante = energiaNuclear-costoViaje
            println("Viaje Autorizado")
            println("Energía Restante $restante")
        }
        energiaNuclear<costoViaje && motorActivo->{
            println("Energia Insuficiente")
        }
        !motorActivo->{
            println("El motor esta apagado")
        }
    }
}