import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";

import {Palette} from "../theme/colors";
import {fetchForecastData} from "../api/makeRequests";

export const Weather = () => {

  const [inputValue, setInputValue] = useState('');
  const [forecast, setForecast] = useState({});
  const [errorText, setErrorText] = useState('');

  const icon = forecast?.weather?.[0]?.icon;
  const temperature = Math.floor(forecast?.main?.temp) - 273;
  const humidity = forecast?.main?.humidity;
  const windSpeed = forecast?.wind?.speed;

  const handleChangeInput = (enteredText) => {
    setInputValue(enteredText.trim())
  }

  const handleSubmit = () => {
    const getForecast = async () => {
      try {
        const fetchedForecast = await fetchForecastData(inputValue)
        return fetchedForecast
      } catch (error) {
        setErrorText('В данный момент недоступно')
        console.log(errorText)
      }
    }
    getForecast()
      .then(res => setForecast(forecast => ({...forecast, ...res?.data})))
  }

  /*const handleResetError = () => {
    setErrorText('')
  }*/

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cityInput}
        autoCorrect={false}
        onSubmitEditing={handleSubmit}
        value={inputValue}
        onChangeText={handleChangeInput}
      />
      {Object.keys(forecast).length > 0 &&
      <>
        <View style={styles.imgContainer}>
          <Image
            style={styles.weatherImage}
            source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
          />
        </View>
        <Text style={styles.valueText}>Температура: {temperature}°C</Text>
        <Text style={styles.valueText}>Влажность: {humidity}%</Text>
        <Text style={styles.valueText}>Скорость ветра: {windSpeed} км/ч</Text>
      </>
      }
      {/*{errorText &&
        <View style={styles.errorContainer}>
          <Text style={styles.valueText}>{errorText}</Text>
          <CustomButton onPress={handleResetError}>Ок</CustomButton>
        </View>
      }*/}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.colors.primary2,
    alignItems: 'center',
  },
  cityInput: {
    width: "80%",
    height: 50,
    fontSize: 30,
    fontWeight: "bold",
    borderWidth: 3,
    borderColor: Palette.colors.primary4,
    borderRadius: 10,
    marginTop: 25,
    color: Palette.colors.primary5,
    textAlign: "center"
  },
  imgContainer: {
    width: 200,
    height: 200,
  },
  weatherImage: {
    width: '100%',
    height: '100%'
  },
  valueText: {
    textAlign: "center",
    color: Palette.colors.primary4,
    fontSize: 20,
    fontWeight: "bold"
  },
  errorContainer: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: 'red',
    fontSize: 20,
    fontWeight: "bold"
  }
});