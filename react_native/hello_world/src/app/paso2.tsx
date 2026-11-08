import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso2() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.glow} />

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.logoCaja}>
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.logo}
            />
          </View>

          <View style={styles.estadoContenedor}>
            <View style={styles.puntoEstado} />
            <Text style={styles.estadoTexto}>En línea</Text>
          </View>
        </View>

        <Text style={styles.titulo}>Conectar servidor</Text>
        <Text style={styles.subtitulo}>
          Establece una sesión segura con tu infraestructura.
        </Text>

        <View style={styles.infoBox}>
          <View style={styles.infoFila}>
            <Text style={styles.infoLabel}>Servidor</Text>
            <Text style={styles.infoValor}>web-01</Text>
          </View>
          <View style={styles.infoFila}>
            <Text style={styles.infoLabel}>IP</Text>
            <Text style={styles.infoValor}>10.0.2.10</Text>
          </View>
          <View style={styles.infoFila}>
            <Text style={styles.infoLabel}>Puerto</Text>
            <Text style={styles.infoValor}>22</Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={() => Alert.alert('Conectando', 'Estableciendo conexión SSH...')}
        >
          <Text style={styles.textoBoton}>Conectar SSH</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingHorizontal: 24,
  },
  glow: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#38bdf8',
    opacity: 0.2,
    top: 80,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoCaja: {
    width: 68,
    height: 68,
    borderRadius: 22,
    backgroundColor: '#e0f2fe',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#38bdf8',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  logo: {
    width: 42,
    height: 42,
  },
  estadoContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 197, 94, 0.12)',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.35)',
  },
  puntoEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4ade80',
    marginRight: 8,
  },
  estadoTexto: {
    color: '#bbf7d0',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f8fafc',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    lineHeight: 22,
    color: '#cbd5e1',
    marginBottom: 18,
  },
  infoBox: {
    backgroundColor: 'rgba(15, 118, 110, 0.12)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: 'rgba(94, 234, 212, 0.15)',
  },
  infoFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  infoLabel: {
    color: '#94a3b8',
    fontSize: 13,
    fontWeight: '600',
  },
  infoValor: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '700',
  },
  boton: {
    backgroundColor: '#38bdf8',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#38bdf8',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  botonPresionado: {
    backgroundColor: '#0ea5e9',
    transform: [{ scale: 0.98 }],
  },
  textoBoton: {
    color: '#082f49',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.3,
  },
})