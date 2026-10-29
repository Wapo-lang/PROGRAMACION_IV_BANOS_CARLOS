// app/index.tsx — añade la función Paso3
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Servidor = {
  id: string
  nombre: string
  ip: string
  estado: 'activo' | 'alerta' | 'inactivo'
  cpu: number
}

const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'prod-web-01', ip: '10.0.1.10', estado: 'activo',   cpu: 42 },
  { id: '2', nombre: 'prod-web-02', ip: '10.0.1.11', estado: 'activo',   cpu: 38 },
  { id: '3', nombre: 'prod-db-01',  ip: '10.0.2.10', estado: 'alerta',   cpu: 91 },
  { id: '4', nombre: 'prod-db-02',  ip: '10.0.2.11', estado: 'activo',   cpu: 55 },
  { id: '5', nombre: 'stg-web-01',  ip: '10.1.1.10', estado: 'activo',   cpu: 12 },
  { id: '6', nombre: 'stg-db-01',   ip: '10.1.2.10', estado: 'inactivo', cpu: 0  },
  { id: '7', nombre: 'dev-01',      ip: '10.2.1.10', estado: 'activo',   cpu: 7  },
  { id: '8', nombre: 'dev-02',      ip: '10.2.1.11', estado: 'alerta',   cpu: 78 },
]

const COLOR_ESTADO: Record<Servidor['estado'], string> = {
  activo:   '#2e7d32',
  alerta:   '#e65100',
  inactivo: '#6b7280',
}

export function Paso3() {
  const { width } = useWindowDimensions()

  // Grid responsivo: 2 columnas en teléfono (< 600dp), 4 en tablet (≥ 600dp)
  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Dashboard · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {SERVIDORES.map((srv) => (
          <TarjetaServidor
            key={srv.id}
            servidor={srv}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaServidor({
  servidor,
  ancho,
}: {
  servidor: Servidor
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[servidor.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      {/* Indicador de estado */}
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreServidor} numberOfLines={1}>
        {servidor.nombre}
      </Text>
      <Text style={estilosPaso3.ip}>{servidor.ip}</Text>

      {/* Barra de CPU */}
      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${servidor.cpu}%`,
              backgroundColor: servidor.cpu > 80 ? '#c62828' : '#1565c0',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.cpu}>CPU: {servidor.cpu}%</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreServidor: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
  ip:             { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  cpu:          { fontSize: 11, color: '#6b7280' },
})