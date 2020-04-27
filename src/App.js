import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import styles from './App.module.css';

const App = () => {
	const [stayAtHome, setStayAtHome] = useState(true);
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
			<div className={styles.updatedTime}>
				Updated: {new Date(data.updated).toDateString()}
			</div>
			<h1>Is Stay at Home Over?</h1>
			<div className={styles.loriContainer}>
				<h2>NO!</h2>
			</div>
			<p className={styles.visit}>
				Please visit:{' '}
				<a href="https://www.worldometers.info/coronavirus/">
					worldometers/corona
				</a>{' '}
				for up to date stats
			</p>
			<Cards {...data} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart {...data} country={country} />
		</div>
	);
};

export default App;
