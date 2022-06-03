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
		let response = await axios
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
		selected.push(product);
		await axios.post('https://reactministore.herokuapp.com/cart', product);
		alert('Product has been adde to cart');
		window.location.href = '/cart';
	};

	return (
		<div>
			{Object.keys(product).length === 0 ? (
				<h3>Fetching data from API . . .</h3>
			) : (
				<div>
					<div className='box'>
						<div
							className='prodImg'
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: '20px',
								width: '90%',
							}}
						>
							{product.images.map((e) => {
								return (
									<img src={e} style={{ width: '45%', border: '1px solid #00000019' }} />
								);
							})}
						</div>
						<div className='details'>
							<h2>{product.summary}</h2>
							<p>
								Price: ₹{product.price} Color: {product.color}
							</p>
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
