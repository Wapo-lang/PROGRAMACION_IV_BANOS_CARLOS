// app/index.tsx — añade la función Paso4
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

// Función utilitaria que devuelve el estilo de sombra correcto según plataforma
function sombra(nivel: 1 | 2 | 3): object {
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: nivel },
      shadowOpacity: 0.08 + nivel * 0.04,
      shadowRadius: nivel * 2,
    },
    android: {
      elevation: nivel * 3,
    },
    default: {},
  }) ?? {}
}

type EstadoServidor = 'activo' | 'alerta' | 'inactivo'

export function Paso4() {
  const plataforma = Platform.OS

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <View style={estilosPaso4.cabecera}>
        <Text style={estilosPaso4.plataforma}>
          Plataforma detectada: {plataforma}
        </Text>
      </View>

      {/* ── Tarjeta con sombra nivel 1 ──────────────────────────── */}
      <TarjetaSombreada nivel={1} titulo="prod-web-01" estado="activo" ip="10.0.1.10" />

      {/* ── Tarjeta con sombra nivel 2 ──────────────────────────── */}
      <TarjetaSombreada nivel={2} titulo="prod-db-01" estado="alerta" ip="10.0.2.10" />

      {/* ── Tarjeta con sombra nivel 3 ──────────────────────────── */}
      <TarjetaSombreada nivel={3} titulo="prod-storage-01" estado="inactivo" ip="10.0.3.10" />

      {/* ── Comparativa visual del código ──────────────────────── */}
      <View style={estilosPaso4.bloque}>
        <Text style={estilosPaso4.bloqueTexto}>
          {Platform.OS === 'ios'
            ? 'iOS: usando shadowColor + shadowOffset + shadowOpacity + shadowRadius'
            : Platform.OS === 'android'
              ? 'Android: usando elevation'
              : 'Web: sin sombras nativas'}
        </Text>
      </View>

    </ScrollView>
  )
}

function TarjetaSombreada({
  nivel,
  titulo,
  estado,
  ip,
}: {
  nivel: 1 | 2 | 3
  titulo: string
  estado: EstadoServidor
  ip: string
}) {
  const coloresEstado: Record<EstadoServidor, string> = {
    activo:   '#2e7d32',
    alerta:   '#e65100',
    inactivo: '#6b7280',
  }

  return (
    <View style={[estilosPaso4.tarjeta, sombra(nivel)]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={estilosPaso4.titulo}>{titulo}</Text>
        <View style={[estilosPaso4.badge, { backgroundColor: coloresEstado[estado] }]}>
          <Text style={estilosPaso4.badgeTexto}>{estado}</Text>
        </View>
      </View>
      <Text style={estilosPaso4.ip}>{ip}</Text>
      <Text style={estilosPaso4.nivelTexto}>Sombra nivel {nivel}</Text>
    </View>
  )
}

const estilosPaso4 = StyleSheet.create({
  cabecera: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 12,
  },
  plataforma: { color: '#fff', fontWeight: '700', fontSize: 14 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  titulo:     { fontSize: 15, fontWeight: '700', color: '#1a1a2e' },
  ip:         { fontSize: 12, color: '#6b7280' },
  nivelTexto: { fontSize: 11, color: '#9ca3af', marginTop: 4 },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '600' },
  bloque: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
  bloqueTexto: { fontSize: 13, color: '#92400e' },
})