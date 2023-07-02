import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import DaysRow from './DaysRow';
import { CalendarDaysIcon } from 'react-native-heroicons/solid';

const UpcomingForecast = ({ weather }) => {
	return (
		<View className='mb-2 space-y-3'>
			<View className='flex-row items-center mx-5 space-x-2'>
				<CalendarDaysIcon size='22' color='white' />
				<Text className='text-white text-base'>Weekly forecast</Text>
			</View>
			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
			>
				{weather && <DaysRow weather={weather} />}
			</ScrollView>
		</View>
	);
};

export default UpcomingForecast;
