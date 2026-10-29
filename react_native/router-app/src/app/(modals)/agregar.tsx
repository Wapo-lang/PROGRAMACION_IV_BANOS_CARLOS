// app/(modals)/agregar.tsx
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'

export default function ModalAgregarServidor() {
  const [nombre, setNombre] = useState('')
  const [ip,     setIp]     = useState('')

  function guardar() {
    if (!nombre.trim() || !ip.trim()) return
    // En una app real: persistes en el store o llamas a la API
    console.log('Nuevo servidor:', { nombre, ip })
    router.back()   // cierra el modal
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.instruccion}>
        Ingresa los datos del nuevo nodo de infraestructura.
      </Text>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Nombre del host</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="ej. prod-api-03"
          placeholderTextColor="#90a4ae"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Dirección IP</Text>
        <TextInput
          style={styles.input}
          value={ip}
          onChangeText={setIp}
          placeholder="ej. 10.0.2.60"
          placeholderTextColor="#90a4ae"
          keyboardType="decimal-pad"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar servidor</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#263238',
    padding: 24,
    gap: 20,
  },
  instruccion: { fontSize: 14, color: '#90a4ae', lineHeight: 20 },
  grupo:       { gap: 6 },
  etiqueta:    { fontSize: 13, color: '#b0bec5', fontWeight: '500' },
  input: {
    backgroundColor: '#37474f',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#eceff1',
    fontFamily: 'monospace',
    borderWidth: 1,
    borderColor: '#546e7a',
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#0d47a1' },
  botonTexto:      { color: '#fff', fontWeight: '700', fontSize: 16 },
  cancelar:        { textAlign: 'center', color: '#78909c', fontSize: 14, padding: 8 },
})