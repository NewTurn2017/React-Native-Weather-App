import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import axios from 'axios'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function App() {
  const [city, setCity] = useState('')
  const [temperature, setTemperature] = useState('')
  const [description, setDescription] = useState('')
  const [weatherData, setWeatherData] = useState([])

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
      const API_KEY = '7ee8b9dad793abb8049af944f1ffb621'

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )

      setCity(data.city.name)
      setWeatherData(data.list)
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
        contentContainerStyle={styles.weather}
      >
        {weatherData.map((data, index) => (
          <View style={styles.day} key={index}>
            <Text style={styles.temp}>{data.main.temp}°C</Text>
            <Text style={styles.description}>
              {data.weather[0].description}
            </Text>
          </View>
        ))}
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
    fontSize: 150,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
})
