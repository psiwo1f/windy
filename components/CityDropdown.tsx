import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/solid';

const CityDropdown = ({ locations, handleLocation }) => {
	return (
		<View className='absolute w-full bg-gray-300 top-16 rounded-3xl '>
			{locations.map((loc, index) => {
				let showBorder = index + 1 != locations.length;
				let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : '';
				return (
					<TouchableOpacity
						key={index}
						onPress={() => handleLocation(loc)}
						className={
							'flex-row items-center border-0 p-3 px-4 mb-1 ' + borderClass
						}
					>
						<MapPinIcon size='20' color='gray' />
						<Text className='text-black text-lg ml-2'>
							{loc?.name}, {loc?.country}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default CityDropdown;
