open class Vehiculo(val nombre: String){
    fun mostrarNombre(){
        println("Vehiculo: $nombre")
    }
}

class NaveInterespacial(nombre: String, val energia: Int):
    Vehiculo(nombre){
        fun mostrarEnergia(){
            println("Energia: $energia")
        }
    }

fun main(){
    val nave = NaveInterespacial("Nave Interdimensional", 100)
    nave.mostrarNombre()
    nave.mostrarEnergia()
}