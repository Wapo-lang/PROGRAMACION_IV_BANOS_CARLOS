import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Resumen() {
  return (
    <SafeAreaView style={styles.pantalla}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>Resumen de vuelos</Text>
        <Text style={styles.numero}>3</Text>
        <Text style={styles.detalle}>vuelos en el panel de salidas</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#F1F5F9' },
  contenido: { alignItems: 'center', padding: 24 },
  titulo: { color: '#0F172A', fontSize: 24, fontWeight: '700' },
  numero: { color: '#2563EB', fontSize: 48, fontWeight: '700', marginTop: 24 },
  detalle: { color: '#64748B', fontSize: 14 },
})
