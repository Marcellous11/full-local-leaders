import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import '../styles/LeaderMiniBio.css';

const LeaderMiniBio = ({ office, offical }) => {
	//PURPOSE: Change background color of module based on party id.
	let bgColor;
	switch (offical.party) {
		case 'Republican Party':
			bgColor = ' rgb(185, 37, 32)';
			break;
		case 'Democratic Party':
			bgColor = 'rgb(74, 108, 148)';
			break;
		case 'Nonpartisan':
			bgColor = 'white';
			break;
		default:
			bgColor = 'white';
	}

	return (
		<div className="LeaderMiniBio">
			<Link to={`/leader/${offical.name.replace(/\s/g, '')}`}>
				<Card sx={{ maxWidth: 345, backgroundColor: bgColor }}>
					<CardActionArea
						sx={{
							alignItems: 'baseline',
							display: 'flex',
							justifyContent: 'flex-start',
							paddingLeft: '.5rem'
						}}
					>
						<Stack>
							<Avatar sx={{ backgroundColor: ' rgb(127, 27, 0)' }} id="avatar">
								{offical.name[0]}
							</Avatar>
						</Stack>
						<CardContent
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								justifyContent: 'flex-start'
							}}
						>
							<Typography gutterBottom variant="h5" component="div" id="name">
								{offical.name}
							</Typography>

							<Typography variant="body1" color="text.secondary">
								{office}
							</Typography>
							<Typography variant="body1" color="text.secondary">
								{offical.party}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Link>
		</div>
	);
};
export default LeaderMiniBio;
