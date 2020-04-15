import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};

		fetchAPI();
	}, [setFetchedCountries]);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={handleCountryChange}>
				<option value="global">Global</option>
				{fetchedCountries.map((country) => (
					<option value={country} key={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
