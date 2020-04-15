import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import { fetchData } from './api';

import coronaImage from './images/image.png';
import styles from './App.module.css';

class App extends Component {
	state = {
		data: {},
		country: '',
	};
	async componentDidMount() {
		const data = await fetchData();

		this.setState({
			data,
		});
	}

	handleCountryChange = async (e) => {
		const country = e.target.value;
		const data = await fetchData(country);

		this.setState({ data, country });
	};
	render() {
		const { data, country } = this.state;
		console.log(data);
		return (
			<div className={styles.container}>
				<img src={coronaImage} className={styles.image} alt="COVID-19" />
				<div className={styles.updatedTime}>
					Updated: {new Date(this.state.data.updated).toDateString()}
				</div>
				<Cards {...data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart {...data} country={country} />
			</div>
		);
	}
}

export default App;
