import React from 'react';
import { Routes, Route } from 'react-router';
import Cart from './Cart';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import ProductListing from './ProductListing';
import ProductDetails from './ProductDetails';
import Checkout from './Checkout';
import Payment from './Payment';
import Signup from './Signup';

const Routers = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}>
					Home
				</Route>
				<Route path='/products' element={<ProductListing />}>
					Products
				</Route>
				<Route path='/product/:id' element={<ProductDetails />}></Route>
				<Route path='/cart' element={<Cart />}>
					CART
				</Route>
				<Route path='/login' element={<Login />}>
					LOGIN
				</Route>
				<Route path='/signup' element={<Signup />}>
					Signup
				</Route>
				<Route path='/checkout' element={<Checkout />}>
					Checkout
				</Route>
				<Route path='/payment' element={<Payment />}>
					Payment
				</Route>
			</Routes>
		</div>
	);
};
export default Routers;
