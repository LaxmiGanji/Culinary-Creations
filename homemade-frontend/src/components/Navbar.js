import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo1 from './logo1.png';

function Navbar()
{
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
	    if (window.innerWidth <= 960) {
	      setButton(false);
	    } else {
	      setButton(true);
	    }
	};

	useEffect(() => {
		showButton();
		return () => {
			window.removeEventListener('resize', showButton);
		};
	}, []);

	useEffect(() => {
		window.addEventListener('resize', showButton);
		return () => {
			window.removeEventListener('resize', showButton);
		};
	}, []);

	const logout = () => {
		localStorage.setItem("loggedIn", "false");
		localStorage.setItem("username", "");
		window.open("/","_self");
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-left">
					<Link to="/" className="logo-link" onClick={closeMobileMenu}>
						<div className="logo-image">
							<img src={logo1} alt="Cook Genie Logo" />
						</div>
					</Link>

					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					Culinary Creations
					</Link>
				</div>

				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to='/' className='nav-links' onClick={closeMobileMenu}>
							Home
						</Link>
					</li>

					<li className='nav-item'>
						<Link 
							to={localStorage.getItem("loggedIn") === "true" ? '/feed' : '/sign_up'} 
							className='nav-links' 
							onClick={closeMobileMenu}
						>
							Feed
						</Link>
					</li>

					<li className='nav-item'>
						<Link to='/about' className='nav-links' onClick={closeMobileMenu}>
							About Us
						</Link>
					</li>

					<li className='nav-item'>
						<Link 
							to={localStorage.getItem("loggedIn") === "true" ? '/dashboard' : '/sign_up'} 
							className='nav-links' 
							onClick={closeMobileMenu}
						>
							Dashboard
						</Link>
					</li>
				</ul>

				{button && (
					localStorage.getItem("loggedIn") === "true" ? (
						<Button buttonStyle='btn--outline' onClick={logout}>
							LOGOUT
						</Button>
					) : (
						<Button linkTo='/sign_up' buttonStyle='btn--outline'>
							LOGIN
						</Button>
					)
				)}
			</div>
		</nav>
	);
}

export default Navbar;