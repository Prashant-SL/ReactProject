import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Checkout() {
	const [cart, setcart] = useState([]);

	const loginData = JSON.parse(localStorage.getItem('login')) || 0;

	let response;
	const fetchProducts = async () => {
		response = await axios
			.get('https://reactministore.herokuapp.com/cart/')
			.catch((err) => {
				console.log('Err: ', err);
			});
		setcart([...response.data]);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	var totalPrice = 0;
	for (let i = 0; i < cart.length; i++) {
		totalPrice += Number(cart[i].price);
	}

	return (
		<>
			<Box maxW='95%' m='auto' mt='10'>
				<Box
					maxW={{ base: '100%', md: '60%', lg: '60%' }}
					m='auto'
					boxShadow='outline'
					p='6'
					rounded='md'
					bg='white'
				>
					<Flex gap='5' direction={{ base: 'column', md: 'column', lg: 'row' }}>
						<Box
							w={{ base: '100%', md: '100%', lg: '50%' }}
							boxShadow='dark-lg'
							p='6'
							rounded='md'
							bg='white'
							bgColor='#F0FFF4'
						>
							<FormControl p='5'>
								<FormLabel>Name</FormLabel>
								<Input type='text' value={`${loginData.name}`} readonly />
								<FormLabel>Email</FormLabel>
								<Input type='text' value={`${loginData.email}`} readonly />
								<FormLabel>Address</FormLabel>
								<Input type='text' placeholder='Enter Shipping Address' />
							</FormControl>
						</Box>
						<Box
							w={{ base: '100%', md: '100%', lg: '50%' }}
							boxShadow='dark-lg'
							p='6'
							rounded='md'
							bg='white'
							bgColor='#F0FFF4'
						>
							<Heading size='sm'>Price Value</Heading>
							{cart.map((e) => {
								return (
									<Flex justifyContent='space-between' p='5'>
										<Heading size='sm'>{e.brandname}</Heading>
										<Heading size='sm'>{e.price}</Heading>
									</Flex>
								);
							})}
							<Flex justifyContent='space-between' p='5'>
								<Heading size='sm'>Total</Heading>
								<Heading size='sm'>{totalPrice}</Heading>
							</Flex>
							<hr></hr>
							<Link to='/payment'>
								<Button mt='5'>Procced to Payment</Button>
							</Link>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
}
