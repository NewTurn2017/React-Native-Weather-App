import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar style="red" />
    </View>
  )
}
