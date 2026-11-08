import { useState } from 'react'
import { Button, ScrollView, Text, View } from 'react-native'

type Estado = 'Programado' | 'Abordando' | 'En vuelo'

type Vuelo = {
  numero: string
  destino: string
  hora: string
  puerta: string
  estado: Estado
}

const vuelosIniciales: Vuelo[] = [
  { numero: 'AV204', destino: 'Bogotá', hora: '09:30', puerta: 'A1', estado: 'Programado' },
  { numero: 'LA312', destino: 'Lima', hora: '10:15', puerta: 'B2', estado: 'Abordando' },
  { numero: 'IB641', destino: 'Madrid', hora: '11:00', puerta: 'C3', estado: 'Programado' },
]

export default function Index() {
  const [vuelos, setVuelos] = useState(vuelosIniciales)

  function avanzarEstado(numero: string) {
    setVuelos((actuales) =>
      actuales.map((vuelo) => {
        if (vuelo.numero !== numero || vuelo.estado === 'En vuelo') return vuelo
        return { ...vuelo, estado: vuelo.estado === 'Programado' ? 'Abordando' : 'En vuelo' }
      }),
    )
  }

  return (
    <ScrollView>
      <Text>Control de vuelos del aeropuerto</Text>
      <Text>Salidas de hoy: {vuelos.length}</Text>
      {vuelos.map((vuelo) => (
        <View key={vuelo.numero}>
          <Text>{vuelo.numero} - {vuelo.destino}</Text>
          <Text>Hora: {vuelo.hora} | Puerta: {vuelo.puerta}</Text>
          <Text>Estado: {vuelo.estado}</Text>
          <Button
            title={
              vuelo.estado === 'Programado'
                ? 'Iniciar abordaje'
                : vuelo.estado === 'Abordando'
                  ? 'Marcar en vuelo'
                  : 'Vuelo en curso'
            }
            onPress={() => avanzarEstado(vuelo.numero)}
            disabled={vuelo.estado === 'En vuelo'}
          />
        </View>
      ))}
    </ScrollView>
  )
}
