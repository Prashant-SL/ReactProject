import React, { useEffect, useState } from 'react';
import { Box, Link, Flex, Heading, Text, Image, Grid, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

export default function Cart() {
	const [cart, setcart] = useState([]);

	let response;
	const fetchProducts = async () => {
		response = await axios
			.get('https://reactministore.herokuapp.com/products/cart/')
			.catch((err) => {
				console.log('Err: ', err);
			});
		setcart([...response.data]);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const removeProduct = (id) => {
		axios
			.delete(`https://reactministore.herokuapp.com/products/cart/${id}`)
			.then(console.log('deleted'));
		window.alert('Item Removed');
		window.location.reload();
	};

	let userDetail = window.localStorage.getItem('login');
	console.log('login', userDetail);

	let totalPrice = 0;
	for (let i = 0; i < cart.length; i++) {
		totalPrice += Number(cart[i].price);
	}

	return (
		<div>
			<Box maxW='95%' m='auto'>
				<Flex gap={20} direction={{ base: 'column', md: 'row', lg: 'row' }}>
					<Box maxW='70%' m={{ base: 'auto', md: '0', lg: '0' }}>
						{cart.map((e) => {
							return (
								<Box
									borderRadius={5}
									textDecoration='none'
									mt='10px'
									p='2'
									boxShadow='outline'
									rounded='md'
									bg='white'
								>
									<Flex direction={{ base: 'column', md: 'row', lg: 'row' }}>
										<Box maxW='200px'>
											<Image h='100%' src={e.images[0]}></Image>
										</Box>
										<Box textAlign='left' w={{ base: '100%', md: '70%', lg: '100%' }}>
											<Heading size='sm'>{e.summary}</Heading>
											<Grid
												gap={6}
												templateColumns={{
													base: 'repeat(1, 1fr)',
													md: 'repeat(2, 1fr)',
													lg: 'repeat(4, 1fr)',
												}}
											>
												<Text>
													<b>Brand: </b>
													{e.brandname}
												</Text>
												<Text>
													<b>Price: </b>
													{e.price}
												</Text>
												<Text>
													<b>Color: </b>
													{e.color}
												</Text>
												<Text>
													<b>Size: </b>
													{e.screensize}
												</Text>
												<Text>
													<b>HDD: </b>
													{e.hard_disk_size}
												</Text>
												<Text>
													<b>RAM: </b>
													{e.ram}
												</Text>
												<Text>
													<b>OS: </b>
													{e.os}
												</Text>
												<Text>
													<b>Graphics: </b>
													{e.card_discription}
												</Text>
											</Grid>
										</Box>
									</Flex>
									<Box ml={{ base: '0', md: '40%', lg: '40%' }} w='100%'>
										<Flex
											gap={2}
											direction={{ base: 'column', md: 'row', lg: 'row' }}
											w={{ base: '100%', md: '100%', lg: '100%' }}
										>
											{/* <Button>+</Button>
                        <Button>0</Button>
                        <Button>-</Button> */}
											<Button onClick={() => removeProduct(e._id)}>Remove</Button>
										</Flex>
									</Box>
								</Box>
							);
						})}
					</Box>
					<Box>
						<Box m='auto' boxShadow='outline' rounded='md' bg='white' mt='4%'>
							<Heading color='teal' border='1px' rounded='md' size='lg'>
								Cart Summary
							</Heading>
							<Text fontSize={25}>
								<b>Total Quantity:</b>
								{cart.length}
							</Text>
							<Text fontSize={25}>
								<b>Total Price: </b>
								{totalPrice}
							</Text>
							<Link href='/checkout'>
								<Button colorScheme='teal' variant='solid' mb='2%' mt='2%'>
									Checkout
								</Button>
							</Link>
						</Box>
					</Box>
				</Flex>
			</Box>
		</div>
	);
}
