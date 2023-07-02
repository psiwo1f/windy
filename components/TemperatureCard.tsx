import { View, Text, Image } from 'react-native';
import React from 'react';
import { weatherImages } from '../constants';

const TemperatureCard = ({ currentWeather }) => {
	return (
		<>
			<View className='flex-row justify-center'>
				<Image
					source={weatherImages[currentWeather?.condition?.text || 'other']}
					className='w-52 h-52'
				/>
			</View>
			<View className='space-y-2'>
				{/* <Text className="text-center font-bold text-white text-6xl ml-5"></Text> */}
				<View className='flex-row ml-16'>
					<Text className='text-center font-bold text-white text-6xl'>
						{currentWeather?.temp_c}&#176;C |
					</Text>
					<Text className='mt-4 ml-2 font-normal text-white text-2xl'>
						{currentWeather?.temp_f}&#176;F
					</Text>
				</View>

				<Text className='text-center text-white text-xl tracking-widest'>
					{currentWeather?.condition?.text}
				</Text>
			</View>
		</>
	);
};

export default TemperatureCard;
