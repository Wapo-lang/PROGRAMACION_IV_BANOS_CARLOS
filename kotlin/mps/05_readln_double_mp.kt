fun main() {
    print("Ingrese el combustible del vuelo en litros: ")
    val combustible = readln().toDouble()

    if (combustible >= 500.0) {
        println("Combustible suficiente para el vuelo")
    } else {
        println("Se necesita mas combustible")
    }
}
