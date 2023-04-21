import { StatusBar } from 'expo-status-bar'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const today = new Date()
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function App() {
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState('')
  const [description, setDescription] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLocationAsync()
  }, [])

  const getLocationAsync = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        console.log('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      let { latitude, longitude } = location.coords
      const API_KEY = '826d7a44b198cf8c95e55967b086ae22'
      setLoading(true)
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )

      console.log(data)

      const processedData = data.list.map((item) => ({
        id: item.dt,
        temperature: item.main.temp,
        description: item.weather[0].description,
        date: new Date(item.dt * 1000), // Convert unix timestamp to date object
        icon: item.weather[0].icon,
      }))

      setCity(data.city.name)
      setWeatherData(processedData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.weather, { flexGrow: 1 }]}
      >
        {loading ? (
          <ActivityIndicator style={styles.loading} size="large" color="red" />
        ) : (
          weatherData.map((data) => (
            <View key={data.id} style={styles.day}>
              <View style={styles.dateContainer}>
                <Text style={styles.dayOfWeek}>
                  {daysOfWeek[data.date.getDay()]}
                </Text>
                <Text style={styles.date}>
                  {MONTHS[data.date.getMonth()]} {data.date.getDate()},{' '}
                  {data.date.getFullYear()}
                </Text>
              </View>
              <View style={styles.weatherInfo}>
                <Icon
                  name={`weather-${data.icon || 'partlycloudy'}`}
                  size={70}
                  color="black"
                  style={styles.icon}
                />
                <Text style={styles.temp}>{data.temperature}°C</Text>
                <Text style={styles.description}>{data.description}</Text>
              </View>
            </View>
          ))
        )}
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  dateContainer: {
    color: 'black',
    alignItems: 'center',
    marginTop: 20,
  },
  dayOfWeek: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  date: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherInfo: {
    alignItems: 'center',
  },
  icon: {
    marginTop: 20,
  },
})
