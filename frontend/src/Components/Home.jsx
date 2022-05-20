import React, { useEffect, useState } from 'react';
import './Home.css';
import ProductListing from './ProductListing';

const Home = () => {
	return (
		<div>
			<div className='imageBox'>
				<p className='header' style={{ textAlign: 'left' }}>
					SHOP TILL <br /> YOU DROP
				</p>
			</div>
			<div className='topProducts'>
				<h2>BEST SELLING...</h2>
				<div className='homeProducts'>
					<ProductListing />
				</div>
			</div>
		</div>
	);
};
export default Home;
