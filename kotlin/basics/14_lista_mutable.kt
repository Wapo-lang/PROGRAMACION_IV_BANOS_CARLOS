fun main() {
    val portales = mutableListOf("Tierra", "Marte", "Saturno")

    var option: Int?
    do {
        println("\nLaboratorio de Apellido Nombre")
        println("1. Agregar Portal")
        println("2. Mostrar Portales")
        println("3. Modificar Portal")
        println("4. Eliminar Portal")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readLine()?.toIntOrNull()

        when (option) {
            1 -> {
                print("Nombre del nuevo portal: ")
                val nombre = readLine() ?: ""
                if (nombre.isNotBlank()) {
                    portales.add(nombre)
                    println("Portal incluido")
                } else {
                    println("El nombre no puede estar vacío")
                }
            }
            2 -> {
                println("Portales:")
                for ((i, portal) in portales.withIndex()) {
                    println("[$i] Portal: $portal")
                }
            }
            3 -> {
                println("Actualizar")
                print("Índice a modificar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in portales.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine() ?: ""
                    if (nuevoNombre.isNotBlank()) {
                        portales[indice] = nuevoNombre
                        println("Portal Actualizado")
                    } else {
                        println("Nombre no válido")
                    }
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Índice a eliminar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in portales.indices) {
                    portales.removeAt(indice)
                    println("Portal Eliminado")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo...")
            else -> println("Opción no válida")
        }
    } while (option != 5)
}