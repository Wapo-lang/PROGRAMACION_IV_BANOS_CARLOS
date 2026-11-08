// app/servidores/[id].tsx
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams, router } from 'expo-router'

interface DetalleServidor {
  nombre:    string
  ip:        string
  sistema:   string
  cpu:       string
  ram:       string
  disco:     string
  puertos:   string[]
  ultimaPing: string
}

const DB_SERVIDORES: Record<string, DetalleServidor> = {
  '1': {
    nombre: 'web-01', ip: '10.0.2.10', sistema: 'Ubuntu 24.04 LTS',
    cpu: '4 vCPU · 38%', ram: '8 GB · 2.9 GB usados',
    disco: '100 GB · 41 GB libres',
    puertos: ['22 (SSH)', '80 (HTTP)', '443 (HTTPS)'],
    ultimaPing: 'hace 12 s',
  },
  '2': {
    nombre: 'db-primary', ip: '10.0.2.20', sistema: 'Debian 12 Bookworm',
    cpu: '8 vCPU · 72%', ram: '32 GB · 18.4 GB usados',
    disco: '500 GB · 213 GB libres',
    puertos: ['22 (SSH)', '5432 (PostgreSQL)'],
    ultimaPing: 'hace 5 s',
  },
  '3': {
    nombre: 'cache-01', ip: '10.0.2.30', sistema: 'Alpine 3.19',
    cpu: '2 vCPU · 15%', ram: '4 GB · 3.1 GB usados',
    disco: '20 GB · 17 GB libres',
    puertos: ['22 (SSH)', '6379 (Redis)', '26379 (Sentinel)'],
    ultimaPing: 'hace 2 min',
  },
  '4': {
    nombre: 'worker-01', ip: '10.0.2.40', sistema: 'Ubuntu 22.04 LTS',
    cpu: '4 vCPU · 91%', ram: '16 GB · 15.2 GB usados',
    disco: '200 GB · 8 GB libres',
    puertos: ['22 (SSH)', '4001 (worker)'],
    ultimaPing: 'sin respuesta',
  },
  '5': {
    nombre: 'storage-nas', ip: '10.0.2.50', sistema: 'TrueNAS Scale 24',
    cpu: '2 vCPU · 5%', ram: '8 GB · 1.1 GB usados',
    disco: '20 TB · 14.2 TB libres',
    puertos: ['22 (SSH)', '445 (SMB)', '2049 (NFS)'],
    ultimaPing: 'hace 8 s',
  },
}

function FilaDetalle({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export default function DetalleServidor() {
  // useLocalSearchParams lee el segmento capturado por [id].tsx
  const { id } = useLocalSearchParams<{ id: string }>()
  const servidor = DB_SERVIDORES[id ?? '']

  if (!servidor) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.error}>Servidor "{id}" no encontrado</Text>
        <Text style={styles.enlace} onPress={() => router.back()}>
          ← Volver a la lista
        </Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: servidor.nombre }} />

      <View style={styles.encabezado}>
        <Text style={styles.nombreServidor}>{servidor.nombre}</Text>
        <Text style={styles.ipServidor}>{servidor.ip}</Text>
        <Text style={styles.sistemaServidor}>{servidor.sistema}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>RECURSOS</Text>
        <FilaDetalle etiqueta="CPU"   valor={servidor.cpu} />
        <FilaDetalle etiqueta="RAM"   valor={servidor.ram} />
        <FilaDetalle etiqueta="Disco" valor={servidor.disco} />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>RED</Text>
        <FilaDetalle etiqueta="Último ping" valor={servidor.ultimaPing} />
        {servidor.puertos.map((p) => (
          <FilaDetalle key={p} etiqueta="Puerto" valor={p} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:      { flex: 1, backgroundColor: '#f0f4f8' },
  contenido:   { padding: 16, gap: 16 },
  centrado:    { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  error:       { fontSize: 16, color: '#c62828' },
  enlace:      { fontSize: 14, color: '#1565c0' },
  encabezado: {
    backgroundColor: '#1565c0',
    borderRadius: 12,
    padding: 20,
    gap: 4,
  },
  nombreServidor: { fontSize: 22, fontWeight: '700', color: '#fff' },
  ipServidor:     { fontSize: 14, color: '#bbdefb', fontFamily: 'monospace' },
  sistemaServidor:{ fontSize: 13, color: '#90caf9' },
  seccion: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78909c',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  fila:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#546e7a', fontWeight: '500' },
  valor:    { fontSize: 13, color: '#1a1a1a', fontFamily: 'monospace', flexShrink: 1, textAlign: 'right' },
})