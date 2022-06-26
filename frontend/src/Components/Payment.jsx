import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Payment = () => {
	const [cartDetails, setCartDetails] = useState([]);
	let response;
	const fetchCartProducts = async () => {
		response = await axios
			.get('https://reactministore.herokuapp.com/cart/')
			.catch((err) => {
				console.log('Err: ', err);
			});
		setCartDetails([...response.data]);
	};

	useEffect(() => {
		fetchCartProducts();
	}, []);

	const [book, setBook] = useState({
		name: 'Amount to be paid is - ',
		author: 'John Green',
		img: 'https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		price: 250,
	});

	let totalPrice = 0;
	for (let i = 0; i < cartDetails.length; i++) {
		totalPrice += Number(cartDetails[i].price);
	}

	const startPayment = (data) => {
		const options = {
			key: 'rzp_test_ClJIw40tzT61oj',
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: 'Test Transaction',
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const { data } = await axios.post(
						'https://reactministore.herokuapp.com/api/payment/verify',
						response
					);
					alert('Payment Successfull');
				} catch (err) {
					console.log(err);
				}
			},
			theme: {
				color: '#3399cc',
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = 'https://reactministore.herokuapp.com/api/payment/orders';
			const { data } = await axios.post(orderUrl, { amount: totalPrice });
			startPayment(data.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='App'>
			<div
				className='book_container'
				style={{ width: '25%', marginTop: '3%', margin: 'auto' }}
			>
				<img src={book.img} alt='book_img' className='book_img' />
				<p className='book_name'>{book.name}</p>
				<p className='book_price'>
					Price : <span>&#x20B9; {totalPrice}</span>
				</p>
				<button
					style={{ marginBottom: '4%' }}
					onClick={handlePayment}
					className='buy_btn'
				>
					Pay now
				</button>
			</div>
		</div>
	);
};
export default Payment;
