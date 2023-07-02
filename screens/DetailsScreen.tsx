import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, {
	useLayoutEffect,
} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import UpcomingForecast from '../components/UpcomingForecast';
import WeatherStats from '../components/WeatherStats';
import TemperatureCard from '../components/TemperatureCard';
import { useNavigation, useRoute } from '@react-navigation/native';

const DetailsScreen = () => {
	const navigation = useNavigation();

	// use the params being sent from the previous screen
	const {
		params: { location, weather, current, loading },
	} = useRoute();

	// to hide the header
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	return (
		<View className='flex-1 relative'>
			<StatusBar style='light' />
			<Image
				blurRadius={60}
				source={require('../assets/images/bg.png')}
				className='absolute w-full h-full'
			/>
			{loading ? (
				<View className='flex-1 flex-row justify-center items-center'>
					<Progress.CircleSnail thickness={10} size={140} color='#0bb3b2' />
				</View>
			) : (
				<SafeAreaView className='flex-1'>
					{/* navigation.goBack to go back screen */}
					<TouchableOpacity
						onPress={navigation.goBack}
						className='absolute top-14 left-5 p-2 rounded-full z-10'
					>
						<ArrowLeftIcon size={20} color='white' />
					</TouchableOpacity>

					{/* forecast section */}
					<View className='mx-4 flex justify-around flex-1 mb-2'>
						<Text className='text-white text-center text-2xl font-bold'>
							{location?.name},{' '}
							<Text className='text-lg font-semibold text-gray-300'>
								{location?.country}
							</Text>
						</Text>
						<TemperatureCard currentWeather={current} />
						<WeatherStats currentWeather={current} weather={weather} />
					</View>
					<UpcomingForecast weather={weather} />
				</SafeAreaView>
			)}
		</View>
	);
};

export default DetailsScreen;
