import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>오늘의 날씨</Text>
      <StatusBar style="auto" />
    </View>
  )
}
