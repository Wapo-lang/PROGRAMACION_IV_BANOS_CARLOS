import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Estado = 'Programado' | 'Abordando' | 'En vuelo'

const vuelosIniciales = [
  { numero: 'AV204', destino: 'Bogotá', hora: '09:30', puerta: 'A1', estado: 'Programado' as Estado },
  { numero: 'LA312', destino: 'Lima', hora: '10:15', puerta: 'B2', estado: 'Abordando' as Estado },
  { numero: 'IB641', destino: 'Madrid', hora: '11:00', puerta: 'C3', estado: 'Programado' as Estado },
]

export default function Index() {
  const [vuelos, setVuelos] = useState(vuelosIniciales)

  function avanzarEstado(numero: string) {
    setVuelos((actuales) =>
      actuales.map((vuelo) => {
        if (vuelo.numero !== numero || vuelo.estado === 'En vuelo') return vuelo
        const nuevoEstado: Estado = vuelo.estado === 'Programado' ? 'Abordando' : 'En vuelo'
        return { ...vuelo, estado: nuevoEstado }
      }),
    )
  }

  return (
    <SafeAreaView style={styles.pantalla}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <Text style={styles.etiqueta}>AEROPUERTO</Text>
        <Text style={styles.titulo}>Control de vuelos</Text>
        <Text style={styles.subtitulo}>Salidas de hoy · {vuelos.length} vuelos</Text>

        {vuelos.map((vuelo) => (
          <View key={vuelo.numero} style={styles.tarjeta}>
            <View style={styles.fila}>
              <Text style={styles.numero}>{vuelo.numero}</Text>
              <Text style={[styles.estado, vuelo.estado === 'En vuelo' && styles.verde]}>
                {vuelo.estado}
              </Text>
            </View>
            <Text style={styles.destino}>{vuelo.destino}</Text>
            <Text style={styles.detalle}>Hora {vuelo.hora} · Puerta {vuelo.puerta}</Text>
            <Pressable
              accessibilityRole="button"
              disabled={vuelo.estado === 'En vuelo'}
              onPress={() => avanzarEstado(vuelo.numero)}
              style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
            >
              <Text style={styles.textoBoton}>
                {vuelo.estado === 'Programado'
                  ? 'Iniciar abordaje'
                  : vuelo.estado === 'Abordando'
                    ? 'Marcar en vuelo'
                    : 'Vuelo en curso'}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#F1F5F9' },
  contenido: { width: '100%', maxWidth: 560, alignSelf: 'center', padding: 20, gap: 14 },
  etiqueta: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  titulo: {
    color: '#0F172A',
    fontSize: 28,
    fontWeight: '700',
    marginTop: -10,
  },
  subtitulo: {
    color: '#64748B',
    fontSize: 14,
    marginTop: -10,
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numero: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
  estado: {
    color: '#92400E',
    backgroundColor: '#FEF3C7',
    overflow: 'hidden',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: '600',
  },
  verde: {
    color: '#166534',
    backgroundColor: '#DCFCE7',
  },
  destino: {
    color: '#0F172A',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 12,
  },
  detalle: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 4,
  },
  boton: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 9,
    marginTop: 16,
    paddingVertical: 12,
  },
  presionado: {
    opacity: 0.8,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
})
