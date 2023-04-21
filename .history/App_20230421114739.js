import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
const { width: SCREEN_WIDTH } = Dimensions.get('window').width // Get the width of the screen
console.log(SCREEN_WIDTH)
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>

      <ScrollView horizontal style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
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
    fontSize: 68,
    fontWeight: 'bold',
  },
  city: {
    flex: 1.2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather: {
    height: '60%',
    backgroundColor: 'white',
  },
  day: {
    flexDirection: 'column', // Add this line to stack temp and description vertically
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: 10,
  },
  temp: {
    color: 'black',
    fontSize: 100,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10, // Add marginTop to reduce the gap between temp and description
  },
})
