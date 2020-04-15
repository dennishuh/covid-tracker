import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import coronaImage from './images/image.png';
import styles from './App.module.css';

const App = () => {
	const [data, setData] = useState({});
	const [country, setCountry] = useState('');
	useEffect(() => {
		const fetchAPI = async () => {
			setData(await fetchData());
		};
		fetchAPI();
	}, []);

	const handleCountryChange = async (e) => {
		const country = e.target.value;
		const data = await fetchData(country);

		setData(data);
		setCountry(country);
	};

	return (
		<div className={styles.container}>
			<img src={coronaImage} className={styles.image} alt="COVID-19" />
			<div className={styles.updatedTime}>
				Updated: {new Date(data.updated).toDateString()}
			</div>
			<Cards {...data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart {...data} country={country} />
		</div>
	);
};

export default App;
