import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import { Link, useParams } from 'react-router-dom';
import { Button, checkboxClasses } from '@mui/material';
import { v4 as uuid } from 'uuid';
import ProfileTemp from '../moduleTemp/ProfileTemp';
import defaultUserImg from '../images/defaultUser.png';
import '../styles/LeaderProfile.css';
import Box from '@mui/material/Box';
import axios from 'axios';

const LeaderProfile = () => {
	const { leaders, getLeaderFromMyDB } = useContext(Context);
	const { id } = useParams();
	const [ leaderImg, setLeaderImg ] = useState(defaultUserImg);

	useEffect(() => {}, []);

	//PURPOSE: Match "id" param to local offical name to set the relevant "user"
	if (leaders) {
		let leader = leaders.localLeaders.find((leader) => id === leader.offical.name.replace(/\s/g, ''));

		//PURPOSE: If leader twitid match with it with leaderImg obj to set img
		if (leader.offical.channels) {
			leader.offical.channels.forEach((channel) => {
				if (channel.type === 'Twitter') {
					getLeaderFromMyDB(channel.id).then(({ data }) => {
						try {
							setLeaderImg(data.imgurl);
						} catch (e) {
							console.log(e);
						}
					});
				}
			});
		}

		return (
			<div className="LeaderProfile">
				<Box
					sx={{
						display: {
							md: 'flex',
							sx: 'block',
							justifyContent: 'space-evenly',
							alignItems: 'flex-start'
						}
					}}
					className="LeaderProfile-userContent"
				>
					{' '}
					<img src={leaderImg} width={300} />
					<ProfileTemp
						key={uuid()}
						name={leader.offical.name}
						office={leader.office}
						party={leader.offical.party}
						links={leader.offical.urls}
						soicalMedia={leader.offical.channels}
						email={leader.offical.emails}
						phone={leader.offical.phones}
					/>
				</Box>
			</div>
		);
	}
	return (
		<div>
			<h1>No leaders found</h1>
			<Button>
				<Link to={`/leaders`}>Back</Link>
			</Button>
		</div>
	);
};
export default LeaderProfile;
