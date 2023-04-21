import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityText}>Busan</Text>
      </View>
      <View style={styles.weather}>
        <View>
          <Text styles={styles.day}>27</Text>
          <Text>Sunny</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  city: {
    flex: 1.2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityText: {
    color: 'white',
    fontSize: 68,
    fontWeight: '500',
  },
  weather: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherText: {
    color: 'black',
    fontSize: 24,
  },
  day: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'teal',
  },
})
