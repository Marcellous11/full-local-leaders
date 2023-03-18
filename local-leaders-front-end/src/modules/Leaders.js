import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import LeaderMiniBio from './LeaderMiniBio';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import '../styles/Leaders.css';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const Leaders = () => {
	const { leaders } = useContext(Context);

	if (leaders) {
		return (
			<div className="Leaders">
				<div className="Leaders-Header">
					<h1>Local Leaders</h1>
					<p>{leaders.normInput.line1}</p>

					<p>
						{leaders.normInput.city}
						{leaders.normInput.state} {leaders.normInput.zip}
					</p>
				</div>

				<div className="Leaders-Boxes">
					<Box sx={{ flexGrow: 1, marginLeft: ' 1.5rem ' }}>
						<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
							{leaders.localLeaders.map((leader, i) => (
								<Grid xs={2} sm={4} md={4} key={i}>
									<LeaderMiniBio key={uuid()} office={leader.office} offical={leader.offical} />
								</Grid>
							))}
						</Grid>
					</Box>
				</div>
			</div>
		);
	}
	return (
		<Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '8rem' }}>
				<CircularProgress />
			</Box>
			<Typography>
				Waiting for leaders, maybe <Link to={`/`}>try again</Link>
			</Typography>
		</Box>
	);
};
export default Leaders;
