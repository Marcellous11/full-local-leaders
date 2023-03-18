import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import '../styles/Landing.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import MyDB from '../apis/myDB';
const Landing = () => {
	const INITAL_VAl = { address: '' };
	const [ formData, setFormData ] = useState(INITAL_VAl);
	const { getleaders } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		const test = async () => {
			let data = await MyDB.getLeader('god');
			console.log(data);
			console.log('Hello');
		};
		test();
	}, []);

	const onChange = (e) => {
		const { value, name } = e.target;

		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};
	const onSubmit = (e) => {
		if (formData.address.trim() === '') {
			setFormData(INITAL_VAl);
		} else {
			localStorage.address = formData.address.trim();
			getleaders(formData.address.trim());
			setFormData(INITAL_VAl);
			navigate('/leaders');
		}
	};

	const theme = createTheme({
		status: {
			danger: '#e53e3e'
		},
		palette: {
			primary: {
				main: 'rgb(185, 37, 32)',
				darker: '#053e85'
			},
			neutral: {
				main: '#64748B',
				contrastText: '#fff'
			}
		}
	});

	return (
		<div className="Landing">
			<div className="Landing-Intro">
				<h1 id="leader-welcome">Welcome</h1>
				<h3 id="leader-to">to</h3>
				<h1 id="leader-offical-name"> Local Leaders of America </h1>
				<p>Enter your address to see your Local Leaders</p>
			</div>
			<ThemeProvider theme={theme}>
				<Box
					component="form"
					sx={{
						'& > :not(style)': { m: 1, width: '60%', minWidth: '330px' }
					}}
					noValidate
					autoComplete="off"
					onSubmit={onSubmit}
				>
					<TextField
						id="adress"
						label="Address"
						variant="outlined"
						onChange={onChange}
						color={`primary`}
						name="address"
						value={formData.address}
					/>
				</Box>
				<Button variant="contained" disableElevation onClick={onSubmit}>
					Search
				</Button>
			</ThemeProvider>
		</div>
	);
};

export default Landing;
