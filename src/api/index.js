import axios from 'axios';

const baseUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
	let url = country ? `${baseUrl}/countries/${country}` : baseUrl;
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate: updated },
		} = await axios.get(url);

		return {
			confirmed,
			recovered,
			deaths,
			updated,
		};
	} catch (error) {
		console.log('There was an error', error);
	}
};

export const fetchDailyData = async () => {
	try {
		const { data } = await axios.get(`${baseUrl}/daily`);
		return data.map((dailyData) => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate,
		}));
	} catch (error) {}
};

export const fetchCountries = async () => {
	try {
		const {
			data: { countries },
		} = await axios.get(`${baseUrl}/countries`);
		return countries.map((country) => country.name);
	} catch (error) {
		console.log('Error in countries', error);
	}
};
