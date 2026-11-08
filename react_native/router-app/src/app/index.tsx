// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'

export default function Inicio() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Panel de Servidores</Text>
      <Text style={styles.subtitulo}>Centro de operaciones de red</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    gap: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a237e',
  },
  subtitulo: {
    fontSize: 15,
    color: '#546e7a',
  },
})