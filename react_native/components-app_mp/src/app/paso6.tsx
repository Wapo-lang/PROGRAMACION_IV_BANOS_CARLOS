// app/index.tsx — agrega al archivo existente
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './paso3'
import { Card, FilaInfo } from './paso2'
import { ModalConfirm } from './paso5'

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en web-01`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>web-01</Text>
          <Text style={estilos6.cabIp}>10.0.2.10 · Ubuntu 24.04 LTS</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Métricas en tiempo real" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="CPU" valor="48% · 4 vCPU" />
          <FilaInfo etiqueta="RAM" valor="3.1 / 8 GB (38%)" />
          <FilaInfo etiqueta="Disco /" valor="42 / 100 GB (42%)" />
          <FilaInfo etiqueta="Red E/S" valor="12.4 Mbps ↓ · 3.1 Mbps ↑" />
          <FilaInfo etiqueta="Uptime" valor="47 días, 6 horas" />
        </Card>

        {/* Card de configuración */}
        <Card titulo="Configuración">
          <FilaInfo etiqueta="Hostname" valor="web-01.cluster.local" />
          <FilaInfo etiqueta="SSH" valor="Puerto 22 · clave RSA-4096" />
          <FilaInfo etiqueta="Firewall" valor="ufw activo · 3 reglas" />
          <FilaInfo etiqueta="Zona" valor="us-east-1a" />
          <FilaInfo etiqueta="Proveedor" valor="Bare-metal DC2" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Reiniciar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Reinicio')}
            />
            <BotonAccion
              etiqueta="Apagar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Apagado')}
            />
            <BotonAccion
              etiqueta="SSH"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Conexión SSH')}
            />
            <BotonAccion
              etiqueta="Ver logs"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Descarga de logs')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en web-01?\nEsta acción afectará el servicio.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})