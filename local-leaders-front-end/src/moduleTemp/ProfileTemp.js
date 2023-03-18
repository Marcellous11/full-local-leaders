import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import '../styles/ProfileTemp.css';

import { v4 as uuid } from 'uuid';
import { useHref } from 'react-router-dom';

export default function ProfileTemp({ name, office, soicalMedia, email, phone, party, links }) {
	return (
		<Card
			id="tempPro-card"
			sx={{ maxWidth: 450, minHeight: 550, backgroundColor: 'rgb(74, 108, 148)', minWidth: '350px' }}
		>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'start'
				}}
			>
				<Typography
					gutterBottom
					id="proName"
					variant="h5"
					component="div"
					sx={{ textAlign: 'center', marginBottom: '2rem', marginTop: '2rem', fontSize: '2.5rem' }}
				>
					{name}
				</Typography>
				<div className="ProTempSupporting">
					<Typography gutterBottom component="div" fontSize={'1.4rem'}>
						{office}
					</Typography>
					<Typography gutterBottom component="div" fontSize={'1.15rem'}>
						{party}
					</Typography>
					<Typography gutterBottom component="div">
						<a href={`mailto:${email}`}> {email}</a>
					</Typography>
					<Typography gutterBottom component="div">
						<a href={`tel:${phone}`}> {phone}</a>
					</Typography>
					<Typography gutterBottom component="div">
						{soicalMedia &&
							soicalMedia.map((media) => {
								return (
									<div key={uuid()}>
										<a href={`https://${media.type}.com/${media.id}`} target="_blank">
											{media.type}
										</a>
										<br />
									</div>
								);
							})}
					</Typography>
					<Typography gutterBottom component="div" color="text.secondary">
						{links &&
							links.map((link) => {
								return (
									<div key={uuid()}>
										<a href={link} target="_blank">
											{link}
										</a>
									</div>
								);
							})}
					</Typography>
				</div>
				{/*
comming soon...
                <Typography gutterBottom component="div" color="text.secondary">
					Approve:
				</Typography>
				<Typography gutterBottom component="div" color="text.secondary">
					Disapprove:
				</Typography> */}
				{/* 

comming soon...
				<CardActions sx={{ justifyContent: 'center' }}>
					<Button>Approve </Button>
					<Button>Disapprove </Button>
				</CardActions> */}
			</CardContent>
			<Link to={`/leaders`}>
				<Button id="backBtn">Back</Button>
			</Link>
		</Card>
	);
}
