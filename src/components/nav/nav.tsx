import React from 'react';
import { Button } from 'react-materialize';
// import './nav.css';


// need to make the below part of state
// or make nav accept props
const Auth = {
	isLoggedIn: true,
	logIn() {
		this.isLoggedIn = true;
	},
	logOut() {
		this.isLoggedIn = false;
	}
};

function Nav() {
  return (
<Button
  floating
  fab={{direction: 'bottom'}}
  icon='home'
  className='blue waves-effect '
  large
  style={{top: '50px'}}>
=======
=======

	const onClickHome = () => {
		window.location.href = '/';
		console.log("let's go to the home page");
	};
	const onClickAbout = () => {
		window.location.href = '/about';
		console.log("let's go to the about page");
	};
	const onClickLogIn = () => {
		window.location.href = 'http://localhost:3001/auth/openidconnect';
		Auth.isLoggedIn = true;
		console.log("let's log in or create a new account");
	};
	const onClickLogOut = () => {
		window.location.href = 'http://localhost:3001/logout';
		Auth.isLoggedIn = false;
		console.log("let's log out");
    };



>>>>>>> master
	return (
		<div>
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

			{
				Auth.isLoggedIn
				? (
					<Button
						floating
						icon='power_settings_new'
						className='blue waves-effect'
						tooltip='Log out'
						tooltipOptions={{position: 'left'}}
						onClick={onClickLogOut}
					/>
				) : (
					<Button
						floating
						icon='account_circle'
						className='blue waves-effect'
						tooltip='Log in or create new account'
						tooltipOptions={{position: 'left'}}
						onClick={onClickLogIn}
					/>
				)
			}

<<<<<<< HEAD
<Button
	floating
	fab={{direction: 'bottom'}}
	icon='home'
	className='blue waves-effect'
	large
	style={{top: '50px'}}>
>>>>>>> master

<Button floating icon='info' className='blue waves-effect'  />
<Button floating icon='pool' className='blue waves-effect' />
<Button floating icon='speaker_notes' className='blue waves-effect' />
<Button floating icon='person_pin_circle' className='blue waves-effect' />
</Button>
=======
			<Button
				floating
				icon='home'
				className='blue waves-effect'
				tooltip='Home'
				tooltipOptions={{position: 'left'}}
				onClick={onClickHome}
			/>
<<<<<<< HEAD
		</Button>
>>>>>>> master
=======
			</Button>
		</div>
>>>>>>> master
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
