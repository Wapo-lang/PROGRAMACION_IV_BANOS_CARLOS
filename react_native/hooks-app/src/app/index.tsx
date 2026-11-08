import { Text, View } from 'react-native';
import Paso1 from './paso1';
import Paso2 from './paso2';
import Paso3 from './paso3';
import SumaPaso3 from './paso3_suma';
import Paso4 from './paso4';



const PASO = 5

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <SumaPaso3 />
    case 5:
      return <Paso4 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}