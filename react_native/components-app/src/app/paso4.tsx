// app/index.tsx — agrega al archivo existente
import { SafeAreaView, ScrollView } from 'react-native'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const SERVIDORES_DEMO = [
  { id: '1',  nombre: 'web-01',       ip: '10.0.2.10', os: 'Ubuntu 24.04',  cpu: 48, ram: 62 },
  { id: '2',  nombre: 'web-02',       ip: '10.0.2.11', os: 'Ubuntu 24.04',  cpu: 51, ram: 58 },
  { id: '3',  nombre: 'db-primary',   ip: '10.0.2.20', os: 'Debian 12',     cpu: 12, ram: 74 },
  { id: '4',  nombre: 'db-replica',   ip: '10.0.2.21', os: 'Debian 12',     cpu: 8,  ram: 71 },
  { id: '5',  nombre: 'cache-01',     ip: '10.0.2.30', os: 'Alpine 3.19',   cpu: 4,  ram: 18 },
  { id: '6',  nombre: 'worker-01',    ip: '10.0.2.40', os: 'Ubuntu 22.04',  cpu: 89, ram: 45 },
  { id: '7',  nombre: 'worker-02',    ip: '10.0.2.41', os: 'Ubuntu 22.04',  cpu: 92, ram: 47 },
  { id: '8',  nombre: 'worker-03',    ip: '10.0.2.42', os: 'Ubuntu 22.04',  cpu: 3,  ram: 12 },
  { id: '9',  nombre: 'lb-01',        ip: '10.0.2.5',  os: 'Alpine 3.19',   cpu: 6,  ram: 9  },
  { id: '10', nombre: 'monitor-01',   ip: '10.0.2.60', os: 'Rocky Linux 9', cpu: 22, ram: 38 },
  { id: '11', nombre: 'backup-01',    ip: '10.0.2.50', os: 'Debian 12',     cpu: 2,  ram: 21 },
  { id: '12', nombre: 'git-server',   ip: '10.0.2.70', os: 'Ubuntu 22.04',  cpu: 15, ram: 33 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaNodo({ nombre, ip, os, cpu, ram }: typeof SERVIDORES_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoIp}>{ip}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{os}</Text>
      <BarraUso porcentaje={cpu} etiqueta="CPU" />
      <BarraUso porcentaje={ram} etiqueta="RAM" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Nodos del clúster</Text>
        <Text style={estilos4.headerSub}>{SERVIDORES_DEMO.length} servidores</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {SERVIDORES_DEMO.map((srv) => (
          <TarjetaNodo key={srv.id} {...srv} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})