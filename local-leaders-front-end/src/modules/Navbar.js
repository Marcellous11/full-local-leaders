import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { margin } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { v4 as uuid } from 'uuid';
import flag from '../images/FullUSAflag.png';
import '../styles/Navbar.css';

export default function Navbar() {
	const [ anchorElNav, setAnchorElNav ] = React.useState(null);
	const [ anchorElUser, setAnchorElUser ] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const onClick = () => {
		localStorage.clear();
	};

	return (
		<div className="Navbar">
			<Box sx={{ minWidth: '330px', flexGrow: 1, width: '101%' }}>
				<AppBar position="static" sx={{ backgroundColor: 'rgb(74, 108, 148)' }}>
					<Toolbar>
						<Tooltip title="America">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{
									mr: 2,

									display: {
										justifyContent: 'flex-start'
									}
								}}
							>
								<img src={flag} width="50" />
							</IconButton>
						</Tooltip>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							onClick={onClick}
							sx={{
								display: { flexGrow: 1, xs: 'flex', md: 'flex', justifyContent: 'flex-start' },
								fontFamily: 'NeilvardThree',
								fontWeight: 1000,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none'
							}}
						>
							LLOA
						</Typography>
						<Typography variant="h5" sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
							<NavLink to="/">
								{' '}
								<Button sx={{ color: 'white' }} color="inherit">
									Search
								</Button>{' '}
							</NavLink>

							<NavLink to="/leaders">
								<Button sx={{ color: 'white' }} color="inherit">
									{' '}
									Leaders{' '}
								</Button>
							</NavLink>

							{/*
						comming soon....
						 <Button color="inherit">Login</Button>
						<Button color="inherit">SignUp</Button> */}
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								align="right"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right'
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' }
								}}
							>
								{/* Ill need a loop here */}
								<MenuItem key={uuid()} onClick={handleCloseNavMenu}>
									<NavLink to="/">
										<Typography textAlign="center" sx={{ color: 'black' }}>
											Search
										</Typography>
									</NavLink>
								</MenuItem>
								<MenuItem key={uuid()} onClick={handleCloseNavMenu}>
									<NavLink to="/leaders">
										<Typography textAlign="center" sx={{ color: 'black' }}>
											Leaders
										</Typography>{' '}
									</NavLink>
								</MenuItem>
								{/* <MenuItem key={uuid()} onClick={handleCloseNavMenu}>
									
								
comming soon...
								<Typography textAlign="center">
									<NavLink to={`/`}>Login in</NavLink>
								</Typography>
							</MenuItem>
							<MenuItem key={uuid()} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">
									<NavLink to={`/`}>Sign Up</NavLink>
								</Typography>
								</MenuItem> */}
							</Menu>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}
