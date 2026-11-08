// app/paso3.tsx
import { useEffect, useRef, useState, type ComponentRef } from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

export default function Paso3() {
  // ── Uso 1: referencia a TextInput para foco programático ─────────
  const inputHostRef = useRef<ComponentRef<typeof TextInput>>(null)
  const inputPuertoRef = useRef<ComponentRef<typeof TextInput>>(null)

  const [host, setHost] = useState<string>('')
  const [puerto, setPuerto] = useState<string>('22')

  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciososRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciososRef.current += 1 // Muta sin provocar re-render
    setUltimaConexion(
      `${host.trim() || 'servidor'}:${puerto.trim()} — intento #${intentosSilenciososRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Conexión SSH</Text>

      <View style={styles.formulario}>
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
          onSubmitEditing={intentarConexion}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.75 },
        ]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último intento: {ultimaConexion}</Text>
      <Text style={styles.subDetalle}>
        (los reintentos silenciosos no causan re-renders)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  formulario: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    gap: 8,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  boton: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 8,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalle: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  subDetalle: {
    color: '#757575',
    fontSize: 12,
    textAlign: 'center',
  },
})