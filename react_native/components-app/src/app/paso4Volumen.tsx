// app/index.tsx — añade debajo de styles3
import { useRef, useState, type ComponentRef } from 'react'
import { SafeAreaView,TextInput, Text , View, Pressable, StyleSheet } from 'react-native'

function Paso4() {
  const [nombre, setNombre] = useState('')
  const [ip, setIp] = useState('')
  const [puerto, setPuerto] = useState('')
  const [password, setPassword] = useState('')
  const [mostrarPass, setMostrarPass] = useState(false)

  const refIp = useRef<ComponentRef<typeof TextInput>>(null)
  const refPuerto = useRef<ComponentRef<typeof TextInput>>(null)
  const refPass = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Configurar acceso SSH</Text>

      {/* Nombre del servidor */}
      <Text style={styles4.etiqueta}>Nombre del servidor</Text>
      <TextInput
        style={styles4.campo}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej. web-03"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refIp.current?.focus()}
      />

      {/* Dirección IP */}
      <Text style={styles4.etiqueta}>Dirección IP</Text>
      <TextInput
        ref={refIp}
        style={styles4.campo}
        value={ip}
        onChangeText={setIp}
        placeholder="192.168.1.1"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refPuerto.current?.focus()}
      />

      {/* Puerto */}
      <Text style={styles4.etiqueta}>Puerto SSH</Text>
      <TextInput
        ref={refPuerto}
        style={styles4.campo}
        value={puerto}
        onChangeText={setPuerto}
        placeholder="22"
        keyboardType="number-pad"
        returnKeyType="next"
        onSubmitEditing={() => refPass.current?.focus()}
      />

      {/* Contraseña */}
      <Text style={styles4.etiqueta}>Contraseña</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refPass}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry={!mostrarPass}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarPass((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarPass ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          ssh {nombre || '<nombre>'}@{ip || '<ip>'} -p {puerto || '22'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})