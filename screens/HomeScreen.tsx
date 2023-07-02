// @ts-nochecsdsd
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { debounce } from 'lodash';
import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { getData, storeData } from '../utils/asyncStorage';
import SearchBar from '../components/Searchbar';
import CityDropdown from '../components/CityDropdown';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const HomeScreen = () => {
	const [showSearch, setShowSearch] = useState(true);
	const [locations, setLocations] = useState([]);
	const [loading, setLoading] = useState(true);
	const [weather, setWeather] = useState({});

	const handleSearch = (search: string) => {
		// console.log('value: ',search);
		if (search && search.length > 2)
			fetchLocations({ cityName: search }).then((data) => {
				console.log('------------------------------------');
				setLocations(data);
			});
	};

	const handleLocation = (loc) => {
		setLoading(true);
		setShowSearch(false);
		setLocations([]);
		fetchWeatherForecast({
			cityName: loc.name,
			days: '7',
		}).then((data) => {
			setLoading(false);
			setWeather(data);
			storeData('city', loc.name);
		});
	};

	useEffect(() => {
		fetchMyWeatherData();
	}, []);

	const fetchMyWeatherData = async () => {
		let myCity = await getData('city');
		let cityName = 'Islamabad';
		if (myCity) {
			cityName = myCity;
		}
		fetchWeatherForecast({
			cityName,
			days: '7',
		}).then((data) => {
			setWeather(data);
			setLoading(false);
		});
	};

	const handleTextDebounce = useCallback(debounce(handleSearch, 1000), []);

	const { location, current } = weather;
	const navigation = useNavigation();

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
					<Text className='p-3 ml-2 mt-5 font-bold text-white text-2xl'>
						Welcome to Windy
					</Text>
					<Text className='p-3 ml-2 text-white'>
						Check out if it's windy in your city?
					</Text>
					<Text className='p-3 mt-12 font-bold text-white text-2xl'>
						Enter a city
					</Text>
					<View style={{ height: '20%' }} className='mx-4 mt-6 relative z-50'>
						<SearchBar
							showSearch={showSearch}
							setShowSearch={setShowSearch}
							handleTextDebounce={handleTextDebounce}
						/>
						{locations.length > 0 && showSearch ? (
							<CityDropdown
								locations={locations}
								handleLocation={handleLocation}
							/>
						) : null}
					</View>
					{current && (
						<>
							<TouchableOpacity
								className='flex-row justify-center rounded-lg m-20'
								style={{ backgroundColor: theme.bgWhite(0.2) }}
								onPress={() => {
									navigation.navigate('Details', {
										location,
										weather,
										current,
										loading,
									});
								}}
							>
								<Text className='p-3 m-1 font-bold text-white text-2xl'>
									Details
								</Text>
							</TouchableOpacity>
							<Text className='p-3 ml-2 text-white'>
								We got the weather for {location.name} 🎉, click Details 👆
							</Text>
						</>
					)}
				</SafeAreaView>
			)}
		</View>
	);
};

export default HomeScreen;
