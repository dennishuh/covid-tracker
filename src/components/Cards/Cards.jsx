import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cs from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ confirmed, recovered, deaths, updated }) => {
	if (!confirmed) return 'Loading...';
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cs(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={1.5}
								separator=","
							/>
						</Typography>
						<Typography variant="body2">Infected</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cs(styles.card, styles.recovered)}
				>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							<CountUp
								start={0}
								end={recovered.value}
								duration={1.5}
								separator=","
							/>
						</Typography>
						<Typography variant="body2">Recovered</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cs(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography variant="h4" gutterBottom>
							<CountUp
								start={0}
								end={deaths.value}
								duration={1.5}
								separator=","
							/>
						</Typography>
						<Typography variant="body2">Deaths</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
