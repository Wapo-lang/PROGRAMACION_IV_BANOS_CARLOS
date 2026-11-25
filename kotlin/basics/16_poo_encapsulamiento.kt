class NaveEncapsulada {
    private var energia = 100

    fun recargar(cantidad: Int){
        if(cantidad > 0){
            energia+=cantidad
        }else{
            println("Cantidad no válida")
        }
    }
    fun mostrarEnergia(){
        println("Energia: $energia")
    }
    fun asignarEnergia(cantidad: Int){
        energia=cantidad
    }
}

fun main(){
    val nave1 = NaveEncapsulada()
    nave1.recargar(50)
    nave1.mostrarEnergia()
    nave1.asignarEnergia(500)
    nave1.mostrarEnergia()
}