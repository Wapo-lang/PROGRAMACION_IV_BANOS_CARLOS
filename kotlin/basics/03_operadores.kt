const val COMBUSTIBLE_MINIMO = 50
fun main(){
    println("Operadores")
    println("Operadores Aritmeticos")
    var numero1: Double = 10.50
    var numero2: Double = 5.50
    var suma: Double = numero1 + numero2

    println("Suma + : $numero1 + $numero2 = ${numero1+numero2}")
    println("Suma + : $numero1 + $numero2 = ${suma}")
    println("Resta - : $numero1 - $numero2 = ${numero1-numero2}")
    println("Multiplicación * : $numero1 * $numero2 = ${numero1*numero2}")
    println("Division / : $numero1 / $numero2 = ${numero1/numero2}")
    println("Residuo % : $numero1 % $numero2 = ${numero1%numero2}")

    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 *,/,%")
    println("3 +,-")
    val cristales = 10+3*5+5
    println("Cristales $cristales")
    val energia = 15/5*5
    println("Energia $energia")
    val combustible = 100+20/4*3-10%3
    println("Combustilble $combustible")

    println("Operadores de Comparación")
    println("Igual a == ${10==10}")
    println("Igual a == ${10==11}")
    println("Diferente de == ${5!=10}")
    println("Diferente de == ${10!=10}")
    println("Mayor que > ${5>10}")
    println("Mayor que > ${15>10}")
    println("Menor que < ${5<10}")
    println("Menor que < ${15<10}")
    println("Mayor o igual que >= ${5>=10}")
    println("Mayor o igual que >= ${15>=10}")
    println("Mayor o igual que >= ${10>=10}")
    println("Menor o igual que <= ${15<=10}")
    println("Menor o igual que <= ${10<=10}")
    println("Menor o igual que <= ${5<=10}")

    println("Operadores lógicos")
    println("&& and Y")
    println("|| and OR")
    println("! NOT")

    val combustible1 = 80
    val portalActivo = true

    val puedeViajar = combustible1 >= 50 && portalActivo

    val negado = !portalActivo

    println("Puede Viajar? $puedeViajar")
    println("Negado ? $negado")

    val tieneTarjeta = false
    val autorizadoPorRick = true
    val puedeEntrar = tieneTarjeta || autorizadoPorRick

    println("Puede entrar? $puedeEntrar")

    println("Control de nave - Rick Sanchez y Carlos Baños")
    val pilotoNave = 100
    var combustibleNave = 20
    var portalUniverso = 5
    val motorActivoNave = true
    println("Piloto: $pilotoNave")
    combustibleNave += 40
    portalUniverso--
    println("Combustible: $combustibleNave")
    println("Portales Restantes: $portalUniverso")
    val tieneCombustible = combustibleNave >= COMBUSTIBLE_MINIMO
    val tienePortales = portalUniverso >= 0
    val puedeViajarNave = tieneCombustible && tienePortales && motorActivoNave
    println("Tiene Combustible? $tieneCombustible")
    println("Tiene Portales? $tienePortales")
    println("Puede Viajar? $puedeViajarNave")

}
