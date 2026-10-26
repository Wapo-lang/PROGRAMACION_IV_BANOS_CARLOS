// paso2.tsx
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoPing = 'pinging' | 'ok' | 'timeout' | 'inactivo'

export default function Paso2() {
  const [latencia, setLatencia] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoPing>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)
  const [paquetesPerdidos, setPaquetesPerdidos] = useState<number>(0)

  useEffect(() => {
    if (!activo) return

    const intervalo = setInterval(() => {
      setEstado('pinging')

      setTimeout(() => {
        const falla = Math.random() < 0.15

        if (falla) {
          setLatencia(null)
          setEstado('timeout')
          setPaquetesPerdidos((prev) => prev + 1) // Incremento acumulativo
        } else {
          const ms = Math.floor(Math.random() * 190) + 10
          setLatencia(ms)
          setEstado('ok')
        }
        setCiclos((c) => c + 1)
      }, 400)
    }, 2000)

    return () => clearInterval(intervalo)
  }, [activo])

  const porcentajePerdida =
    ciclos > 0 ? ((paquetesPerdidos / ciclos) * 100).toFixed(1) : '0.0'

  const colorEstado: Record<EstadoPing, string> = {
    pinging: '#1565c0',
    ok: '#2e7d32',
    timeout: '#c62828',
    inactivo: '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Monitor de Ping — nginx-01</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        
        <Text style={styles.latencia}>
          {latencia !== null ? `${latencia} ms` : '— ms'}
        </Text>

        <Text style={styles.perdida}>
          Pérdida de paquetes: {porcentajePerdida}% ({paquetesPerdidos}/{ciclos})
        </Text>

        <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
        <Text style={styles.detalle}>nginx-01 · 10.0.2.30 · Puerto 80</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo((a) => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener ping' : 'Iniciar ping'}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tarjeta: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    gap: 6,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  latencia: {
    marginVertical: 8,
    fontSize: 36,
    fontWeight: 'bold',
  },
  perdida: {
    fontSize: 14,
    fontWeight: '600',
    color: '#d32f2f',
  },
  ciclos: {
    fontSize: 14,
  },
  detalle: {
    color: '#757575',
    fontSize: 13,
  },
  boton: {
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
  },
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})