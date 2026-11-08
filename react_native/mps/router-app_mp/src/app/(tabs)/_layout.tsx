// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:   '#1565c0',
        tabBarInactiveTintColor: '#90a4ae',
        tabBarStyle:             { backgroundColor: '#ffffff', borderTopColor: '#e0e0e0' },
        headerStyle:             { backgroundColor: '#1565c0' },
        headerTintColor:         '#ffffff',
        headerTitleStyle:        { fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:        'Inicio',
          tabBarIcon:   ({ color, size }) => (
            <TabIcon nombre="inicio" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="alertas"
        options={{
          title:      'Alertas',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="alertas" color={color} size={size} />
          ),
          tabBarBadge: 3,   // número de alertas no leídas
        }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{
          title:      'Ajustes',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="ajustes" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

// Icono simple con texto hasta que se instalen íconos vectoriales
function TabIcon({ nombre, color, size }: { nombre: string; color: string; size: number }) {
  const icono: Record<string, string> = {
    inicio:   '🖥',
    alertas:  '🔔',
    ajustes:  '⚙',
  }
  return (
    <Text style={{ fontSize: size * 0.8, color }}>{icono[nombre]}</Text>
  )
}