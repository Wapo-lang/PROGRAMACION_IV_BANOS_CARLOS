// app/paso3_suma.tsx
import { useEffect, useRef, useState, type ComponentRef } from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

export default function SumaPaso3() {
  // ── Uso 1: Referencias para controlar el foco entre inputs ─────────
  const numero1Ref = useRef<ComponentRef<typeof TextInput>>(null)
  const numero2Ref = useRef<ComponentRef<typeof TextInput>>(null)

  const [espacio1, setEspacio1] = useState<string>('')
  const [espacio2, setEspacio2] = useState<string>('')

  const [resultado, setResultado] = useState<number | null>(null)

  useEffect(() => {
    numero1Ref.current?.focus()
  }, [])

  // ── Uso 2: Contador de sumas realizadas sin re-renderizar ───────────
  const intentosSilenciososRef = useRef<number>(0)
  const [ultimaOperacion, setUltimaOperacion] = useState<string>('—')

  function sumar() {
    const val1 = parseFloat(espacio1) || 0
    const val2 = parseFloat(espacio2) || 0
    const total = val1 + val2

    intentosSilenciososRef.current += 1

    setResultado(total)
    setUltimaOperacion(
      `${val1} + ${val2} = ${total} (operación #${intentosSilenciososRef.current})`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Calculadora de Suma</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Primer Número (Espacio 1)</Text>
        <TextInput
          ref={numero1Ref}
          style={styles.input}
          value={espacio1}
          onChangeText={setEspacio1}
          placeholder="Ingresa un número"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => numero2Ref.current?.focus()}
        />

        <Text style={styles.etiqueta}>Segundo Número (Espacio 2)</Text>
        <TextInput
          ref={numero2Ref}
          style={styles.input}
          value={espacio2}
          onChangeText={setEspacio2}
          placeholder="Ingresa otro número"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          returnKeyType="done"
          onSubmitEditing={sumar}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.75 },
        ]}
        onPress={sumar}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      {resultado !== null && (
        <View style={styles.tarjetaResultado}>
          <Text style={styles.etiquetaResultado}>Resultado:</Text>
          <Text style={styles.valorResultado}>{resultado}</Text>
        </View>
      )}

      <Text style={styles.detalle}>Última operación: {ultimaOperacion}</Text>
      <Text style={styles.subDetalle}>
        (el contador de operaciones en ref no causa re-renders)
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
  botonSecundario: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 14,
  },
  tarjetaResultado: {
    backgroundColor: '#e8f5e9',
    borderColor: '#81c784',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 6,
  },
  etiquetaResultado: {
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: '600',
  },
  valorResultado: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1b5e20',
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