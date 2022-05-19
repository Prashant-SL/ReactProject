import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<a href='/'>
					<h1>Online React Shop</h1>
				</a>
			</ul>

			<div className='leftBigBox'>
				<Link to='/'>Home</Link>
				<Link to='/cart'>Cart</Link>
				<Link to='/login'>Login</Link>
			</div>
		</nav>
	);
};
export default Navbar;
