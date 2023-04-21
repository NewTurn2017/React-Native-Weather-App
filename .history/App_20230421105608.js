import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text styles={styles.temp}>27</Text>
          <Text styles={styles.description}>Sunny</Text>
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
  cityName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  city: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  temp: {
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
