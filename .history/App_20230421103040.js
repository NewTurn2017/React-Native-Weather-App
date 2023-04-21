import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
})
