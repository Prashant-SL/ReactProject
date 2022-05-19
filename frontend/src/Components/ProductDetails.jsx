import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsActions';
import './ProductDetails.css';

const ProductDetails = () => {
	const { id } = useParams();
	var selected = JSON.parse(localStorage.getItem('cartProducts')) || [];
	var product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;
	const dispatch = useDispatch();
	const fetchProductDetail = async (id) => {
		let prodid = +id;
		let response = await axios
			.get(`http://localhost:8080/products/${id}`)
			// .then((response) => {
			// })
			.catch((err) => {
				console.log('Err: ', err);
			});
		// console.log('response:', response.data);
		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (id && id !== '') fetchProductDetail(id);
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [id]);

	const addProductCart = async () => {
		var retrievedProduct = JSON.parse(localStorage.getItem('cartProducts'));
		selected.push(product);
		let productData = await axios.post('http://localhost:8080/cart', product);
		console.log('productData:', productData);

		localStorage.setItem('cartProducts', JSON.stringify(selected));
	};
	return (
		<div>
			{Object.keys(product).length === 0 ? (
				<h3>Fetching data from API . . .</h3>
			) : (
				<div>
					<div className='box'>
						<div className='prodImg'>
							<img src={product.images[0]} width='20%' style={{ paddingLeft: '3%' }} />
						</div>
						<div className='details'>
							<h1>{product.summary}</h1>
							<p>Price: ${product.price}</p>
							<h5>Category: {product.category}</h5>
							<p>{product.description}</p>
							<div className='afterDetails'>
								<button onClick={addProductCart}>Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default ProductDetails;
