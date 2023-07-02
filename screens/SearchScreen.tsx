import { View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Searchbar from '../components/Searchbar';

const SearchScreen = () => {
	return (
		<View className='flex-1 relative'>
			<StatusBar style='light' />
		</View>
	);
};

export default SearchScreen;
