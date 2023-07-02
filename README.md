# Windy
A weather app built in react-native




## Ways of running the app

- clone the repo and cd into the root directory
- install the dependencies by running

```
$ npm install

// OR
$ yarn
```

- run the app using

```
$ npx expo start

// running with clearing the cache
$ npx expo start --clear
```

Note: You might need expo-go app installed on your device to run the app on your phone

## Tech Stack

- React Native
- Expo
- React Navigation
- axios (for making http requests)
- Nativewind (tailwindcss for react native)
- async-storage (for persisting data)

## Folder Structure

General directory structure of the app is as follows:

```
- assets
  - icons
  - images
- components
- constants
- screens
    - HomeScreen
    - DetailsScreen
    - SearchScreen
- theme
- utils
- App.js
- app.json

```

## API

This app uses Weather API from [WeatherAPI](https://www.weatherapi.com/). In order to run this app, it is required to add api key in the constants.


## Features

The app has the following features:

- Search for a city by name
  - Select the city from the dorpdown list - does not need to cater invalid city names
- Click on Details button to view the weather details of a city
- New screen to view the weather details of a city
- View the weather details including:
  - Temperature in Celsius and Fahrenheit
  - Humidity
  - Wind Speed
  - Pressure
  - Weather Description
  - Weather Icon
- View the weather details of a city for the whole week
- Weather details are persisted in the device's storage for the last search

## Screenshots

<img src="screenshots/1.jpeg" alt="HomeScreen" width="200"/>
<img src="screenshots/2.jpeg" alt="SearchScreen" width="200"/>
<img src="screenshots/3.jpeg" alt="DetailsScreen" width="200"/>

