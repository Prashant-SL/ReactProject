import { margin } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import axios from 'axios';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
	var [state, setState] = useState([]);
	// var retrievedProduct = JSON.parse(localStorage.getItem('cartProducts'));
	var retrievedProduct = [];
	var quantity = state.length;
	var response;
	const fetchCart = async () => {
		let response = await axios.get('http://localhost:8080/cart');
		let resp = response.data;
		// console.log('resp:', resp);
		setState([...resp]);
		// setState([...resp]);
	};
	// retrievedProduct.push([...state]);
	var totalPrice = 0;
	var prices = state.map((e) => {
		return (totalPrice += Number(e.price));
	});

	useEffect(() => {
		fetchCart();
	}, []);

	const deleteItem = async () => {
		let response = await axios.delete('http://localhost:8080/cart/_id');
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
													`http://localhost:8080/cart/${e._id}`
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
				<button style={{ width: '8%', marginBottom: '2%' }}>Checkout</button>
			</div>
		</div>
	);
};
export default Cart;
