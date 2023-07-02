import { View, Text, Image } from 'react-native';
import React from 'react';

const WeatherStats = ({ currentWeather, weather }) => {
	return (
		<View className='flex-row justify-between mx-4'>
			<View className='flex-row space-x-2 items-center'>
				<Image
					source={require('../assets/icons/wind.png')}
					className='w-6 h-6'
				/>
				<Text className='text-white font-semibold text-base'>
					{currentWeather?.wind_kph}km
				</Text>
			</View>
			<View className='flex-row space-x-2 items-center'>
				<Image
					source={require('../assets/icons/drop.png')}
					className='w-6 h-6'
				/>
				<Text className='text-white font-semibold text-base'>
					{currentWeather?.humidity}%
				</Text>
			</View>
			<View className='flex-row space-x-2 items-center'>
				<Image
					source={require('../assets/icons/sun.png')}
					className='w-6 h-6'
				/>
				<Text className='text-white font-semibold text-base'>
					{weather?.forecast?.forecastday[0]?.astro?.sunrise}
				</Text>
			</View>
		</View>
	);
};

export default WeatherStats;
