// app/index.tsx
import {
  useRef, useState, useEffect, useCallback,
} from 'react'
import {
  Pressable, ScrollView, StyleSheet,
  Text, TextInput, View,
  useWindowDimensions,
  TextInput as RNTextInput,
} from 'react-native'
import { useColorScheme } from '@/hooks/use-color-scheme'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  useState — contador de reintentos                    │
// │  2  Paso 2  useEffect — ping periódico con setInterval           │
// │  3  Paso 3  useRef — foco en TextInput y contador sin re-render  │
// │  4  Paso 4  Hooks nativos — dimensiones y esquema de color       │
// │  5  Paso 5  Custom hook — useConexionSimulada                    │
// │  6  Paso 6  Ejemplo combinado — pantalla de estado del servidor  │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 1

export default function Index() {
  switch (PASO) {
    case 1: return <Paso1 />
    case 2: return <Paso2 />
    case 3: return <Paso3 />
    case 4: return <Paso4 />
    case 5: return <Paso5 />
    case 6: return <Paso6 />
    default:
      return (
        <View style={styles.contenedor}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

// ─── Custom hook ─────────────────────────────────────────────────────

type EstadoConexion = 'desconectado' | 'conectando' | 'conectado' | 'error'

interface ResultadoConexion {
  estado: EstadoConexion
  intentos: number
  latencia: number | null
  reconectar: () => void
  reiniciar: () => void
}

function useConexionSimulada(nombreServidor: string): ResultadoConexion {
  const [estado, setEstado] = useState<EstadoConexion>('desconectado')
  const [intentos, setIntentos] = useState<number>(0)
  const [latencia, setLatencia] = useState<number | null>(null)
  const [disparador, setDisparador] = useState<number>(0)

  useEffect(() => {
    if (estado !== 'conectando') return
    const timeout = setTimeout(() => {
      const falla = Math.random() < 0.4
      setIntentos(n => n + 1)
      if (falla) {
        setEstado('error')
        setLatencia(null)
      } else {
        setLatencia(Math.floor(Math.random() * 150) + 20)
        setEstado('conectado')
      }
    }, 1200)
    return () => clearTimeout(timeout)
  }, [estado, disparador])

  const reconectar = useCallback(() => {
    setEstado('conectando')
    setDisparador(d => d + 1)
  }, [])

  const reiniciar = useCallback(() => {
    setEstado('desconectado')
    setIntentos(0)
    setLatencia(null)
  }, [])

  return { estado, intentos, latencia, reconectar, reiniciar }
}

// ─── Paso 1 ───────────────────────────────────────────────────────────

function Paso1() {
  const [intentos, setIntentos] = useState<number>(0)
  const [conectado, setConectado] = useState<boolean>(false)

  function manejarReintento() {
    if (conectado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    if (nuevoIntento >= 3) setConectado(true)
  }

  const estadoTexto = conectado ? '✓ Conectado a redis-01' : `Intento ${intentos} de 3 fallido`
  const colorEstado = conectado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Conexión a Caché Redis</Text>
      <View style={[styles.tarjeta, { borderColor: colorEstado, width: '100%' }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>{estadoTexto}</Text>
        <Text style={styles.detalle}>redis-01 · 10.0.2.20:6379</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          conectado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !conectado && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={conectado}
      >
        <Text style={styles.textoBoton}>{conectado ? 'Conectado' : 'Reintentar conexión'}</Text>
      </Pressable>
      <Pressable style={styles.botonSecundario} onPress={() => { setIntentos(0); setConectado(false) }}>
        <Text style={styles.textoSecundario}>Reiniciar simulación</Text>
      </Pressable>
    </View>
  )
}

// ─── Paso 2 ───────────────────────────────────────────────────────────

type EstadoPing = 'pinging' | 'ok' | 'timeout' | 'inactivo'

function Paso2() {
  const [latencia, setLatencia] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoPing>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)

  useEffect(() => {
    if (!activo) return
    const intervalo = setInterval(() => {
      setEstado('pinging')
      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) { setLatencia(null); setEstado('timeout') }
        else { setLatencia(Math.floor(Math.random() * 190) + 10); setEstado('ok') }
        setCiclos(c => c + 1)
      }, 400)
    }, 2000)
    return () => clearInterval(intervalo)
  }, [activo])

  const colorEstado: Record<EstadoPing, string> = {
    pinging: '#1565c0', ok: '#2e7d32', timeout: '#c62828', inactivo: '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Monitor de Ping — nginx-01</Text>
      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>{estado.toUpperCase()}</Text>
        <Text style={styles.latencia}>{latencia !== null ? `${latencia} ms` : '— ms'}</Text>
        <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
        <Text style={styles.detalle}>nginx-01 · 10.0.2.30 · Puerto 80</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>{activo ? 'Detener ping' : 'Iniciar ping'}</Text>
      </Pressable>
    </View>
  )
}

// ─── Paso 3 ───────────────────────────────────────────────────────────

function Paso3() {
  const inputHostRef   = useRef<RNTextInput>(null)
  const inputPuertoRef = useRef<RNTextInput>(null)
  const [host, setHost]       = useState<string>('')
  const [puerto, setPuerto]   = useState<string>('22')
  const intentosSilenciosRef  = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  useEffect(() => { inputHostRef.current?.focus() }, [])

  function intentarConexion() {
    intentosSilenciosRef.current += 1
    setUltimaConexion(`${host || 'servidor'}:${puerto} — intento #${intentosSilenciosRef.current}`)
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Conexión SSH</Text>
      <View style={[styles.formulario, { width: '100%' }]}>
        <Text style={styles.etiqueta}>Host o IP</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="10.0.2.10"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />
        <Text style={styles.etiqueta}>Puerto SSH</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>
      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>
      <Text style={styles.detalle}>Último: {ultimaConexion}</Text>
    </View>
  )
}

// ─── Paso 4 ───────────────────────────────────────────────────────────

function Paso4() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const esquema = useColorScheme()
  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas
  const servidores = [
    { nombre: 'web-01',    ip: '10.0.2.10', estado: 'activo' },
    { nombre: 'db-01',     ip: '10.0.2.20', estado: 'activo' },
    { nombre: 'cache-01',  ip: '10.0.2.30', estado: 'timeout' },
    { nombre: 'backup-01', ip: '10.0.2.40', estado: 'activo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>Inventario de Servidores</Text>
      <View style={[styles.tarjeta, { backgroundColor: colores.tarjeta, borderColor: colores.borde, width: '100%' }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          {Math.round(width)} × {Math.round(height)} dp · escala: {scale.toFixed(1)} · tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {servidores.map(srv => (
          <View key={srv.nombre} style={[styles.tarjeta, {
            backgroundColor: colores.tarjeta, borderColor: colores.borde, width: anchoTarjeta,
          }]}>
            <Text style={[styles.nombreServidor, { color: colores.texto }]}>{srv.nombre}</Text>
            <Text style={[styles.ipServidor, { color: colores.detalle }]}>{srv.ip}</Text>
            <Text style={{ fontSize: 12, fontWeight: '600', color: srv.estado === 'activo' ? '#2e7d32' : '#c62828' }}>
              {srv.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

// ─── Paso 5 ───────────────────────────────────────────────────────────

interface PropsTarjeta {
  nombre: string
  hook: ReturnType<typeof useConexionSimulada>
}

function TarjetaServidor({ nombre, hook }: PropsTarjeta) {
  const { estado, intentos, latencia, reconectar, reiniciar } = hook
  const colorEstado: Record<string, string> = {
    desconectado: '#757575', conectando: '#1565c0', conectado: '#2e7d32', error: '#c62828',
  }
  const textoBoton: Record<string, string> = {
    desconectado: 'Conectar', conectando: 'Conectando…', conectado: 'Reconectar', error: 'Reintentar',
  }
  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreServidor}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>{estado.toUpperCase()}</Text>
      </View>
      <Text style={styles.detalle}>
        Intentos: {intentos}{latencia !== null ? `  ·  ${latencia} ms` : ''}
      </Text>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            estado === 'conectando' ? styles.botonDeshabilitado : styles.botonActivo,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={reconectar}
          disabled={estado === 'conectando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: '#1565c0', justifyContent: 'center' },
            pressed && { opacity: 0.75 },
          ]}
          onPress={reiniciar}
        >
          <Text style={[styles.textoSecundario, { fontSize: 13 }]}>Reiniciar</Text>
        </Pressable>
      </View>
    </View>
  )
}

function Paso5() {
  const webHook   = useConexionSimulada('web-02')
  const cacheHook = useConexionSimulada('cache-02')
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estado de Servicios</Text>
      <TarjetaServidor nombre="web-02"   hook={webHook}   />
      <TarjetaServidor nombre="cache-02" hook={cacheHook} />
    </View>
  )
}

// ─── Paso 6 ───────────────────────────────────────────────────────────

function Paso6() {
  const { width } = useWindowDimensions()
  const esquema = useColorScheme()
  const esModoOscuro = esquema === 'dark'
  const colores = {
    fondo:   esModoOscuro ? '#0d1b2a' : '#f0f4f8',
    tarjeta: esModoOscuro ? '#1a2a3a' : '#ffffff',
    texto:   esModoOscuro ? '#e8eaed' : '#1a1a1a',
    detalle: esModoOscuro ? '#9aa0a6' : '#666666',
    borde:   esModoOscuro ? '#2d3e50' : '#e0e0e0',
  }

  const { estado, intentos, latencia, reconectar, reiniciar } =
    useConexionSimulada('postgres-01')

  const inputFiltroRef = useRef<RNTextInput>(null)
  const [filtro, setFiltro] = useState<string>('')

  useEffect(() => {
    const timer = setTimeout(() => { inputFiltroRef.current?.focus() }, 300)
    return () => clearTimeout(timer)
  }, [])

  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    if (estado !== 'conectado') return
    const intervalo = setInterval(() => {
      const ahora = new Date().toLocaleTimeString()
      const eventos = [
        `[${ahora}] Query en ${Math.floor(Math.random() * 50) + 5}ms`,
        `[${ahora}] Conexión desde 10.0.2.1`,
        `[${ahora}] Checkpoint WAL completado`,
        `[${ahora}] Vacío automático en sessions`,
      ]
      setLogs(prev => [eventos[Math.floor(Math.random() * eventos.length)], ...prev].slice(0, 20))
    }, 1500)
    return () => clearInterval(intervalo)
  }, [estado])

  const logsFiltrados = filtro.trim()
    ? logs.filter(l => l.toLowerCase().includes(filtro.toLowerCase()))
    : logs

  const colorConexion: Record<string, string> = {
    desconectado: '#757575', conectando: '#1565c0', conectado: '#2e7d32', error: '#c62828',
  }

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>Estado del Servidor</Text>

      <View style={[styles.tarjeta, { backgroundColor: colores.tarjeta, borderColor: colorConexion[estado], width: '100%' }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.nombreServidor, { color: colores.texto }]}>postgres-01</Text>
          <Text style={[styles.etiqueta, { color: colorConexion[estado] }]}>{estado.toUpperCase()}</Text>
        </View>
        <Text style={[styles.detalle, { color: colores.detalle }]}>
          10.0.2.50 · PostgreSQL 16 · Puerto 5432
        </Text>
        <Text style={[styles.detalle, { color: colores.detalle }]}>
          Intentos: {intentos}{latencia !== null ? `  ·  ${latencia} ms` : ''}
          {'  ·  '}Tema: {esquema ?? 'sin preferencia'}
        </Text>
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 }}>
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              estado === 'conectando' ? styles.botonDeshabilitado : styles.botonActivo,
              pressed && { opacity: 0.75 },
              { flex: 1 },
            ]}
            onPress={reconectar}
            disabled={estado === 'conectando'}
          >
            <Text style={styles.textoBoton}>
              {estado === 'conectando' ? 'Conectando…' : 'Conectar / Reconectar'}
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { paddingHorizontal: 14, borderRadius: 8, borderWidth: 1, borderColor: colores.borde, justifyContent: 'center' },
              pressed && { opacity: 0.6 },
            ]}
            onPress={reiniciar}
          >
            <Text style={{ color: colores.detalle, fontSize: 13 }}>Reset</Text>
          </Pressable>
        </View>
      </View>

      <TextInput
        ref={inputFiltroRef}
        style={[styles.input, { backgroundColor: colores.tarjeta, borderColor: colores.borde, color: colores.texto, width: '100%' }]}
        value={filtro}
        onChangeText={setFiltro}
        placeholder="Filtrar logs…"
        placeholderTextColor={colores.detalle}
        autoCapitalize="none"
      />

      <ScrollView
        style={[{ borderRadius: 8, padding: 12, maxHeight: 220, width: '100%', backgroundColor: esModoOscuro ? '#0a1520' : '#1e1e1e' }]}
        showsVerticalScrollIndicator={false}
      >
        {estado !== 'conectado' ? (
          <Text style={{ color: '#666', fontStyle: 'italic', fontSize: 12 }}>
            {estado === 'desconectado' || estado === 'error'
              ? 'Sin conexión — los logs aparecen al conectar'
              : 'Estableciendo conexión…'}
          </Text>
        ) : logsFiltrados.length === 0 ? (
          <Text style={{ color: '#666', fontStyle: 'italic', fontSize: 12 }}>
            Sin entradas que coincidan
          </Text>
        ) : (
          logsFiltrados.map((log, i) => (
            <Text key={i} style={{ fontSize: 11, color: '#a8d8a8', lineHeight: 18 }}>{log}</Text>
          ))
        )}
      </ScrollView>

      <Text style={[styles.detalle, { color: colores.detalle, fontSize: 11 }]}>
        {Math.round(width)} dp · {width > 600 ? 'layout ancho' : 'layout normal'}
      </Text>
    </View>
  )
}

// ─── Estilos compartidos ──────────────────────────────────────────────

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 14,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  etiqueta: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  latencia: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1565c0',
  },
  ciclos: {
    fontSize: 13,
    color: '#555',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  nombreServidor: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  ipServidor: {
    fontSize: 12,
    color: '#777',
  },
  formulario: {
    gap: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#1a1a1a',
  },
  nota: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    width: '100%',
  },
  notaTexto: {
    fontSize: 12,
    lineHeight: 18,
  },
  boton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  botonIniciar: {
    backgroundColor: '#1565c0',
  },
  botonDeshabilitado: {
    backgroundColor: '#90a4ae',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
})