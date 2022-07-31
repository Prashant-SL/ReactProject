import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

export default function ProductDetail() {
	let navigate = useNavigate();
	const loginData = JSON.parse(localStorage.getItem('login')) || 0;
	var product = useSelector((state) => state.product);
	let cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const { id } = useParams();

	const fetchProductDetail = async (id) => {
		const response = await axios
			.get(`https://reactministore.herokuapp.com/products/${id}`)
			.catch((err) => {
				console.log('Err: ', err);
			});
		dispatch(selectedProduct(response.data));
	};
	useEffect(() => {
		if (id && id !== '') fetchProductDetail(id);
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [id]);

	const addProductCart = async () => {
		if (loginData.login) {
			await axios.post(`https://reactministore.herokuapp.com/cart`, product)
				.then((res) => console.log(res))
				.catch((err) => {
					console.log('Err: ', err);
				});
			toast.success("Product added to the cart successfully")
			setTimeout(() => {
				window.location.reload();
			}, 4000);
		} else {

			toast.info('Please Login to Add Product to Cart', {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTimeout(() => {
				navigate('/login');
			}, 4000);
		}
	};

	return (
		<>
			<Box maxW='95%' m='auto'>
				<Flex direction={{ base: 'column', md: 'row', lg: 'row' }} gap={5}>
					<Box
						w={{ base: '100%', md: '100%', lg: '60%' }}
						borderRadius='10px'
						boxShadow='2xl'
						p='6'
						rounded='md'
						bg='white'
					>
						<Grid
							gap={6}
							templateColumns={{
								base: 'repeat(1, 1fr)',
								md: 'repeat(2, 1fr)',
								lg: 'repeat(2, 1fr)',
							}}
							p='10px'
							m='auto'
						>
							<Image m={{ base: 'auto', md: 'auto' }} h='250px' src={product.images} />
							<Image m={{ base: 'auto', md: 'auto' }} h='250px' src={product.images} />
							<Image m={{ base: 'auto', md: 'auto' }} h='250px' src={product.images} />
							<Image m={{ base: 'auto', md: 'auto' }} h='250px' src={product.images} />
						</Grid>
					</Box>
					<Box
						borderRadius='10px'
						textAlign='left'
						boxShadow='2xl'
						p='6'
						rounded='md'
						bg='white'
						w={{ base: '100%', md: '100%', lg: '40%' }}
						lineHeight={2}
					>
						<Heading size='md'>{product.summary}</Heading>
						<br />
						<Text>
							<b>Brand Name: </b>
							{product.brandname}
						</Text>
						<Text>
							<b>Price: </b>INR {product.price}
						</Text>
						<Text>
							<b>Screen Size: </b>
							{product.screensize} Inches
						</Text>
						<Text>
							<b>Hard Disk Size: </b>
							{product.hard_disik_size}
						</Text>
						<Text>
							<b>Ram Memory: </b>
							{product.ram}
						</Text>
						<Text>
							<b>Operating System: </b>
							{product.os}
						</Text>
						<Text>
							<b>Card Description: </b>
							{product.card_discription}
						</Text>
						<Box textAlign='center' mt='50px'>
							<Button onClick={addProductCart}>Add to Cart</Button>
						</Box>
					</Box>
				</Flex>
				<ToastContainer />
			</Box>
		</>
	);
}
