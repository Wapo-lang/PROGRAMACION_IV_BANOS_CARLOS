// app/(tabs)/alertas.tsx
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

interface Alerta {
  id:      string
  nivel:   'crítico' | 'advertencia' | 'info'
  mensaje: string
  host:    string
  tiempo:  string
}

const ALERTAS: Alerta[] = [
  { id: '1', nivel: 'crítico',     mensaje: 'Disco al 92 %',         host: 'worker-01',   tiempo: 'hace 2 min' },
  { id: '2', nivel: 'crítico',     mensaje: 'CPU sostenida > 90 %',  host: 'worker-01',   tiempo: 'hace 5 min' },
  { id: '3', nivel: 'advertencia', mensaje: 'RAM > 75 %',            host: 'cache-01',    tiempo: 'hace 18 min' },
  { id: '4', nivel: 'info',        mensaje: 'Backup completado',     host: 'storage-nas', tiempo: 'hace 1 h' },
]

const COLOR_NIVEL: Record<Alerta['nivel'], string> = {
  'crítico':     '#c62828',
  'advertencia': '#e65100',
  'info':        '#1565c0',
}

export default function TabAlertas() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f0f4f8' }}>
      <Stack.Screen options={{ title: 'Alertas' }} />
      <FlatList
        data={ALERTAS}
        keyExtractor={(a) => a.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        renderItem={({ item }) => (
          <View style={estAlertas.tarjeta}>
            <View style={estAlertas.cabecera}>
              <View style={[estAlertas.badge, { backgroundColor: COLOR_NIVEL[item.nivel] }]}>
                <Text style={estAlertas.badgeTexto}>{item.nivel.toUpperCase()}</Text>
              </View>
              <Text style={estAlertas.tiempo}>{item.tiempo}</Text>
            </View>
            <Text style={estAlertas.mensaje}>{item.mensaje}</Text>
            <Text style={estAlertas.host}>{item.host}</Text>
          </View>
        )}
      />
    </View>
  )
}

const estAlertas = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cabecera:  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  tiempo:     { fontSize: 12, color: '#90a4ae' },
  mensaje:    { fontSize: 14, color: '#1a1a1a', fontWeight: '500' },
  host:       { fontSize: 12, color: '#1565c0', fontFamily: 'monospace' },
})