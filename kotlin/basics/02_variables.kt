const val MAX_PORTALES = 10
fun main(){
    var energia = 100
    println(energia)
    println("Autor: Christian Cañar")
    energia = 80
    println("Energia:")
    println(energia)
    println("Tipos de Variables en Kotlin")
    println("Tipo Int")
    var edad: Int = 14
    var portales: Int = 10
    println("edad : $edad")
    println("portales : $portales")
    println("Tipo Long")
    var particulas: Long = 900000L
    println("Particulas : $particulas")
    println("Tipo Float")
    var combustible: Float = 45.5f
    println("Combustible: $combustible")
    println("Tipo Double")
    var distancia: Double = 1250.55
    println("Distancia: $distancia")
    println("Tipo Char un Caracter")
    var codigo: Char = 'C'
    println("Codigo : $codigo")
    println("Tipo String")
    var nombre: String = "Morty Smith"
    var dimension: String = "C-137"
    println("Nombre : $nombre, dimension : $dimension")
    println("Tipo Boolean")
    var portalActivo: Boolean = true
    println("portalActivo : $portalActivo")

    println("VAL CONST VAR")
    val cientifico = "Rick Sanchez"
    var portalesDisponibles = 5
    println("Nombre del cientifico: $cientifico")
    println("Portales disponibles: $portalesDisponibles")
    println("constante Limite: $MAX_PORTALES")
}

