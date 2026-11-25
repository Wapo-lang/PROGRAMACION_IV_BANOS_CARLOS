open class RobotGeneral{
    open fun ejecutarMision(){
        println("Ejecutando mision general")
    }
}

class RobotCombate: RobotGeneral(){
    override fun ejecutarMision(){
        println("Defendiendo el Laboratorio")
    }
}

class RobotExplorador: RobotGeneral(){
    override fun ejecutarMision(){
        println("Explorando nuevos planetas")
    }
}

fun main(){
    val robot1 = RobotCombate()
    val robot2 = RobotExplorador()
    robot1.ejecutarMision()
    robot2.ejecutarMision()
}