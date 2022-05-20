import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
	var [state, setState] = useState([]);
	var retrievedProduct = [];
	var quantity = state.length;
	var response;
	const fetchCart = async () => {
		let response = await axios.get('https://young-reaches-27800.herokuapp.com/cart');
		let resp = response.data;
		setState([...resp]);
	};
	var totalPrice = 0;
	var prices = state.map((e) => {
		return (totalPrice += Number(e.price));
	});

	useEffect(() => {
		fetchCart();
	}, []);

	const deleteItem = async () => {
		let response = await axios.delete(
			'https://young-reaches-27800.herokuapp.com/cart/_id'
		);
		let resp = response.data;
		console.log('resp:', resp);
		setState([...resp]);
	};

	return (
		// <h1>Hi brothers</h1>
		<div>
			<div className='box'>
				<div className='cards'>
					{state.map((e) => {
						return (
							<div id='card'>
								<div
									className='cardBox'
									style={{ display: 'flex', justifyContent: 'center' }}
								>
									<img src={e.images}></img>
									<div className='contentBox'>
										<h4>{e.summary}</h4>
										<h4> ₹{e.price}</h4>
										<button
											className='removeBtn'
											onClick={async () => {
												let response = await axios.delete(
													`https://young-reaches-27800.herokuapp.com/cart/${e._id}`
												);
												let resp = response.data;
												alert('Product has been removed');
												window.location.reload();
												// setState([...resp]);
											}}
										>
											Remove
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='cartSummary'>
				<h1>Cart Summary</h1>
				<p>
					<b>Total Quantity: </b>
					{quantity}
				</p>
				<p>
					<b>Total Price: </b>
					{totalPrice}
				</p>
				<button style={{ width: '8%', marginBottom: '2%' }}>
					<a href='/checkout'>Checkout</a>
				</button>
			</div>
		</div>
	);
};
export default Cart;
