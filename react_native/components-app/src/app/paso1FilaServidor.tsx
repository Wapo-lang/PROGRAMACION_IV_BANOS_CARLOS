import { StyleSheet, Text, View} from "react-native";
import { Servidor } from './paso1'

export function Paso1FilaServidor({ servidor }: { servidor: Servidor }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{servidor.nombre}</Text>
        <Text style={styles1.ip}>{servidor.ip}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          servidor.activo ? styles1.estadoActivo : styles1.estadoInactivo,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {servidor.activo ? 'ACTIVO' : 'CAÍDO'}
        </Text>
      </View>
    </View>
  )
}