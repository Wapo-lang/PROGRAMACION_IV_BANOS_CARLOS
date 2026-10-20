// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso4 } from './paso4'
import { Paso5 } from './paso5'
import { Paso6 } from './paso6'
// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaServidor                     │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │
// │  5  Paso 5  Modal de confirmación                               │
// │  6  Paso 6  Pantalla completa — detalle de servidor             │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 6

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
    case 6:
      return <Paso6 />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})