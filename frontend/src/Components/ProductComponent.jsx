import { Heading, Grid, Flex, Box, Text, Link, Image, Select } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

export default function ProductComponent() {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get('https://reactministore.herokuapp.com/products/')
			.catch((err) => {
				console.log('Err: ', err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleBrands = async (e) => {
		let brand = e.target.value;
		const response = await axios
			.get(`https://reactministore.herokuapp.com/products/sort/${brand}`)
			.catch((err) => {
				console.log('Err: ', err);
			});
		dispatch(setProducts(response.data));
	};

	const priceSorting = (e) => {
		let condition = e.target.value;
		let updated = products.sort((a, b) => {
			if (condition == 'low') {
				return a.price - b.price;
			} else {
				return b.price - a.price;
			}
		});
		dispatch(setProducts([...updated]));
	};

	return (
		<>
			<Box maxW='95%' m='auto' mt='5' boxShadow='dark-lg' p='5' rounded='md' bg='white'>
				<Box textAlign='left' display='flex' gap={2}>
					<Select placeholder='Select Brand' w='200px' onChange={handleBrands}>
						<option value='Lenovo'>Lenovo</option>
						<option value='Dell'>Dell</option>
						<option value='HP'>HP</option>
					</Select>
					<Select placeholder='Sort By Price' w='200px' onChange={priceSorting}>
						<option value='low'>Low to High</option>
						<option value='high'>High to Low</option>
					</Select>
				</Box>

				<Grid
					gap={6}
					templateColumns={{
						base: 'repeat(1, 1fr)',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(4, 1fr)',
					}}
				>
					{products.map((e) => {
						return (
							<Link href={`products/${e._id}`} _hover={{ textDecoration: 'none' }}>
								<Box
									w='100%'
									minH='100%'
									borderRadius={5}
									textDecoration='none'
									mt='10px'
									boxShadow='dark-lg'
									p='0'
									rounded='md'
									bg='white'
								>
									<Image src={e.images[2]} p={4} h='50%' m='auto'></Image>
									<Flex direction='row' justifyContent='space-between' lineHeight={1.6}>
										<Box textAlign='left' textDecor='none'>
											<Flex direction='column' ml={1}>
												<Heading size='sm'>{e.brandname}</Heading>
												<Text>
													<b>Ram: </b>
													{e.ram}
												</Text>
												<Text>
													<b>Storage: </b>
													{e.hard_disik_size}
												</Text>
											</Flex>
										</Box>
										<Box textAlign='left'>
											<Flex direction='column' mr={1}>
												<Heading size='sm'>INR {e.price}</Heading>
												<Text>
													<b>Screen Size: </b>
													{e.size} Inches
												</Text>
												<Text>
													<b>OS: </b>
													{e.os}
												</Text>
											</Flex>
										</Box>
									</Flex>
									<Heading size='sm' ml={1} mr={1} textAlign='left'>
										{e.summary}
									</Heading>
								</Box>
							</Link>
						);
					})}
				</Grid>
			</Box>
		</>
	);
}
