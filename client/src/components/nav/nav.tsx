import React from 'react';
import {Button} from 'react-materialize';
//import './nav.css';

function Nav() {

    // need to make the below part of state and/or make nav accept props const Auth
    // = { 	isLoggedIn: true, 	logIn() { 		this.isLoggedIn = true; 	}, 	logOut() {
    // 		this.isLoggedIn = false; 	}, };
    const onClickHome = () => {
        window.location.href = '/';
        console.log('let\'s go to the home page');
    };
    const onClickAbout = () => {
        window.location.href = '/about';
        console.log('let\'s go to the about page');
    };
    const onClickContact = () => {
        window.location.href = '/contact';
        console.log('let\'s go to the contact page');
    };
    const onClickLogIn = () => {
        window.location.href = 'http://localhost:3001/auth/openidconnect';
        //Auth.isLoggedIn = true;
        console.log('let\'s log in or create a new account');
    };
    const onClickLogOut = () => {
        window.location.href = 'http://localhost:3001/logout';
        //Auth.isLoggedIn = false;
        console.log('let\'s log out');
    };

    return (
        <div>
            <Button
                floating
                fab={{
                direction: 'bottom',
								hoverEnabled: true,
            }}
                icon='menu'
                className='teal darken-1 waves-effect'
                large
                style={{
								top: '50px',
            }}>
                <Button
                    floating
                    icon='info'
                    className='teal darken-1 waves-effect'
                    tooltip='About'
                    tooltipOptions={{
                    position: 'left'
                }}
                    onClick={onClickAbout}/>
                <Button
                    floating
                    icon='person'
                    className='teal darken-1 waves-effect'
                    tooltip='Contact'
                    tooltipOptions={{
                    position: 'left'
                }}
                    onClick={onClickContact}/> 
										{/* {
				Auth.isLoggedIn
				? (
					<Button
						floating
						icon='power_settings_new'
						className='teal darken-1 waves-effect'
						tooltip='Log out'
						tooltipOptions={{position: 'left'}}
						onClick={onClickLogOut}
					/>
				) : (
					<Button
						floating
						icon='account_circle'
						className='teal darken-1 waves-effect'
						tooltip='Log in or create new account'
						tooltipOptions={{position: 'left'}}
						onClick={onClickLogIn}
					/>
				)
			} */}
                <Button
                    floating
                    icon='home'
                    className='teal darken-1 waves-effect'
                    tooltip='Home'
                    tooltipOptions={{
                    position: 'left'
                }}
                    onClick={onClickHome}/>
            </Button>
        </div>
    );
}

export default Nav;