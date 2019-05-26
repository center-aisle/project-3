import React from 'react';
import { Button } from 'react-materialize';
// import './nav.css';

function Nav() {

	const onClickHome = () => {
		window.location.href = '/';
	};
	const onClickAccount = () => {
		window.location.href = 'http://localhost:3001/auth/openidconnect';
	};
	const onClickLogOut = () => {
		window.location.href = 'http://localhost:3001/logout';
	};
	const onClickAbout = () => {
		window.location.href = '/about';
	};

	return (
		<Button
			floating
			fab={{direction: 'bottom', hoverEnabled: true}}
			icon='menu'
			className='blue waves-effect'
			large
			style={{top: '50px'}}
		>
			<Button
				floating
				icon='info'
				className='blue waves-effect'
				tooltip='About'
				tooltipOptions={{position: 'left'}}
				onClick={onClickAbout}
			/>

			{/* how to make this and the account button switch depending on if logged in? */}
			<Button
				floating
				icon='power_settings_new'
				className='blue waves-effect'
				tooltip='Log out'
				tooltipOptions={{position: 'left'}}
				onClick={onClickLogOut}
			/>

			<Button
				floating
				icon='account_circle'
				className='blue waves-effect'
				tooltip='Log in or create new account'
				tooltipOptions={{position: 'left'}}
				onClick={onClickAccount}
			/>

			<Button
				floating
				icon='home'
				className='blue waves-effect'
				tooltip='Home'
				tooltipOptions={{position: 'left'}}
				onClick={onClickHome}
			/>
		</Button>
	);
}

export default Nav;

// // In YourComponent.js
// ...
// import { NavHashLink as NavLink } from 'react-router-hash-link';
// ...
// // Use it just like a RRv4 <NavLink> (see RRv4 api for details):
// <NavLink
//   to="/some/path#with-hash-fragment"
//   activeClassName="selected"
//   // etc...
// >Link to Hash Fragment</NavLink>
