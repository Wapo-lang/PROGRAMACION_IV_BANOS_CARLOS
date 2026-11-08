// app/index.tsx — añade Paso6
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso6() {
  const insets = useSafeAreaInsets()

  return (
    // SafeAreaView aplica padding automático en todos los lados seguros
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0d1117' }}>

      {/* Barra de cabecera pegada al área segura superior */}
      <View style={estilosPaso6.appBar}>
        <Text style={estilosPaso6.appBarTitulo}>Infraestructura</Text>
        <Text style={estilosPaso6.appBarMeta}>8 servidores</Text>
      </View>

      {/* Contenido scrolleable */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, gap: 10 }}
      >
        {['prod-web-01', 'prod-web-02', 'prod-db-01', 'stg-01', 'dev-01'].map((nombre) => (
          <View key={nombre} style={estilosPaso6.fila}>
            <View style={estilosPaso6.punto} />
            <Text style={estilosPaso6.nombreServidor}>{nombre}</Text>
          </View>
        ))}

        {/* Panel de depuración: insets actuales */}
        <View style={estilosPaso6.debug}>
          <Text style={estilosPaso6.debugTitulo}>Safe Area Insets (dp)</Text>
          <Text style={estilosPaso6.debugLinea}>top:    {insets.top}</Text>
          <Text style={estilosPaso6.debugLinea}>bottom: {insets.bottom}</Text>
          <Text style={estilosPaso6.debugLinea}>left:   {insets.left}</Text>
          <Text style={estilosPaso6.debugLinea}>right:  {insets.right}</Text>
        </View>
      </ScrollView>

      {/* Barra inferior flotante — respeta el inset inferior manualmente */}
      <View style={[estilosPaso6.barraInferior, { paddingBottom: insets.bottom + 8 }]}>
        <Text style={estilosPaso6.barraInferiorTexto}>
          Última actualización: hace 30 segundos
        </Text>
      </View>

    </SafeAreaView>
  )
}

const estilosPaso6 = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#161b22',
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  appBarTitulo: { fontSize: 18, fontWeight: '700', color: '#e6edf3' },
  appBarMeta:   { fontSize: 13, color: '#8b949e' },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 8,
    padding: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  punto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3fb950',
  },
  nombreServidor: { fontSize: 14, color: '#e6edf3', fontWeight: '500' },
  debug: {
    backgroundColor: '#21262d',
    borderRadius: 8,
    padding: 12,
    gap: 2,
    marginTop: 8,
  },
  debugTitulo: { fontSize: 12, color: '#58a6ff', fontWeight: '600', marginBottom: 4 },
  debugLinea:  { fontSize: 12, color: '#8b949e', fontFamily: 'monospace' },
  barraInferior: {
    backgroundColor: '#161b22',
    paddingTop: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#30363d',
    alignItems: 'center',
  },
  barraInferiorTexto: { fontSize: 12, color: '#8b949e' },
})