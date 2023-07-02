import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../theme';
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline';

// const handleTextDebounce = useCallback(debounce(handleSearch, 1000), []);

const Searchbar = ({ showSearch, setShowSearch, handleTextDebounce }) => {
	return (
		<View
			className='flex-row justify-end items-center rounded-full'
			style={{
				backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent',
			}}
		>
			{showSearch ? (
				<TextInput
					onChangeText={handleTextDebounce}
					placeholder='Search city'
					placeholderTextColor={'lightgray'}
					className='pl-6 h-10 pb-1 flex-1 text-base text-white'
				/>
			) : null}
			<TouchableOpacity
				onPress={() => setShowSearch(!showSearch)}
				className='rounded-full p-3 m-1'
				style={{ backgroundColor: theme.bgWhite(0.3) }}
			>
				{showSearch ? (
					<XMarkIcon size='25' color='white' />
				) : (
					<MagnifyingGlassIcon size='25' color='white' />
				)}
			</TouchableOpacity>
		</View>
	);
};

export default Searchbar;
