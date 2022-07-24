import { Box, Text, Hide } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Navbar() {
	let navigate = useNavigate();
	const [cart, setcart] = useState([]);

	const loginData = JSON.parse(localStorage.getItem('login')) || 0;
	const len = localStorage.length;
	let response;
	const fetchProducts = async () => {
		response = await axios
			.get('https://reactministore.herokuapp.com/cart')
			.catch((err) => {
				console.log('Err: ', err);
			});
		setcart([...response.data]);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const logout = () => {
		localStorage.removeItem('login');
		navigate('/');
		window.location.reload();
	};

	const loginAlert = () => {
		window.alert('Please Login');
		navigate('/login');
	};

	return (
		<>
			<Box
				display='flex'
				maxW='95%'
				m='auto'
				borderRadius='10px'
				alignItems='center'
				bgColor='#72aaf3'
				h='60px'
				justifyContent='space-between'
				fontSize='20px'
				boxShadow='dark-lg'
				p='6'
				rounded='md'
				bg='#72aaf3'
				mt='2'
			>
				<Box ml='1%' display='flex' gap={3}>
					<Hide below='sm'>
						<Text>
							<b>React Mini Store</b>
						</Text>
					</Hide>
					<Link _hover={{ textDecoration: 'none' }} to='/'>
						Home
					</Link>
					<Hide below='sm'>
						<Link _hover={{ textDecoration: 'none' }} ml='2' to='/products'>
							Products
						</Link>
					</Hide>
				</Box>
				<Box mr='3%' display='flex' gap={3}>
					{loginData.login ? (
						<Link
							_hover={{ textDecoration: 'none' }}
							to='/cart'
							border='1px'
							borderRadius={10}
							w='80px'
						>
							Cart {cart.length}
						</Link>
					) : (
						<Link
							_hover={{ textDecoration: 'none' }}
							onClick={loginAlert}
							to='/login'
							border='1px'
							borderRadius={10}
							w='80px'
						>
							Cart
						</Link>
					)}
					{loginData.login ? (
						<Link onClick={logout} _hover={{ textDecoration: 'none' }}>
							{loginData.name}
						</Link>
					) : (
						<Link to='/login' _hover={{ textDecoration: 'none' }}>
							Login
						</Link>
					)}
				</Box>
			</Box>
		</>
	);
}
