import axios from 'axios';
import { apiKey } from '../constants';

const forecastEndpoint = (params: { cityName: string; days: string }) =>
	`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationsEndpoint = (params: { cityName: string }) =>
	`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;
const apiCall = async (endpoint: string) => {
	const options = {
		method: 'GET',
		url: endpoint,
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.log('error: ', error);
		return {};
	}
};

/**
 * The function fetchWeatherForecast takes in parameters for a city name and number of days, constructs
 * a forecast URL, and makes an API call to fetch the weather forecast.
 * @param params - The `params` parameter is an object that contains two properties:
 * @returns The fetchWeatherForecast function is returning the result of the apiCall function.
 */
export const fetchWeatherForecast = (params: {
	cityName: any;
	days: string;
}) => {
	let forecastUrl = forecastEndpoint(params);
	return apiCall(forecastUrl);
};

/**
 * The function fetchLocations makes an API call to retrieve locations based on a given city name.
 * @param params - The `params` parameter is an object that contains the `cityName` property. The
 * `cityName` property is a string that represents the name of the city for which you want to fetch
 * locations.
 * @returns The function `fetchLocations` is returning the result of the `apiCall` function.
 */
export const fetchLocations = (params: { cityName: string }) => {
	let locationsUrl = locationsEndpoint(params);
	return apiCall(locationsUrl);
};
