import { View, Text, Image } from 'react-native';
import React from 'react';
import { theme } from '../theme';
import { weatherImages } from '../constants';

const DayCard = ({ item, dayName }) => {
	return (
		<View
			className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
			style={{ backgroundColor: theme.bgWhite(0.15) }}
		>
			<Image
				// source={{uri: 'https:'+item?.day?.condition?.icon}}
				source={weatherImages[item?.day?.condition?.text || 'other']}
				className='w-11 h-11'
			/>
			<Text className='text-white'>{dayName}</Text>
			<Text className='text-white text-xl font-semibold'>
				{item?.day?.avgtemp_c}&#176;
			</Text>
		</View>
	);
};

export default DayCard;
