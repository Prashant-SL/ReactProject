import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import axios from 'axios';
import './ProductComponent.css';

const ProductComponent = () => {
	const dispatch = useDispatch();
	const [filteredData, setFilteredData] = useState([]);

	const fetchProducts = async () => {
		const response = await axios.get('http://localhost:8080/products').catch((err) => {
			console.log('Err: ', err);
		});
		let resp = response.data;
		setFilteredData([...resp]);
	};
	useEffect(() => {
		fetchProducts();
	}, []);

	const filtering = (el) => {
		let filterCriteria = el.target.value;
		let updated = filteredData.filter((el) => {
			if (filterCriteria === 'electronics') {
				return el.category === 'electronics';
			} else if (filterCriteria === 'fashion') {
				return el.category === 'fashion';
			} else if (filterCriteria === 'books') {
				return el.category === 'books';
			} else if (filterCriteria === 'furniture') {
				return el.category === 'furniture';
			} else if (filterCriteria === '') {
				return el;
			}
		});
		setFilteredData(updated);
	};
	// dispatch(setProducts(filteredData));
	const sorting = (e) => {
		let sortCriteria = e.target.value;
		let updated = filteredData.sort((a, b) => {
			if (sortCriteria === 'asc') {
				return a.price - b.price;
			} else if (sortCriteria === 'desc') {
				return b.price - a.price;
			} else if (sortCriteria === '') {
				return;
			}
		});
		setFilteredData([...updated]);
	};
	dispatch(setProducts(filteredData));

	const products = useSelector((state) => state.allProducts.products);
	const { id, title, image, price, category } = products;
	return (
		<div style={{ display: 'grid' }}>
			<div className='sortBtns'>
				<select onChange={filtering} placeholder='Sort By'>
					<option value=''>Sort By Category</option>
					<option value='electronics'>Electronics</option>
					<option value='books'>Books</option>
					<option value='furniture'>Furniture</option>
					<option value='fashion'>Fashion</option>
				</select>
				<select onChange={sorting} placeholder='Sort By'>
					<option value=''>Sort By Price</option>
					<option value='asc'>Low to High</option>
					<option value='desc'>High to Low</option>
				</select>
			</div>

			<div className='bigB'>
				{products.map((e) => {
					return (
						<div className='bigBox' key={e.id} style={{ width: '30%' }}>
							<Link to={`/product/${e._id}`}>
								<div className='card'>
									<div className='imageBoxxx'>
										<img
											style={{ padding: '9%' }}
											src={e.images}
											alt={e.name}
											height='300px'
											width='300px'
										/>
									</div>
									<div className='content'>
										<h3
											style={{
												height: '60px',
												overflow: 'hidden',
											}}
										>
											{e.summary}
										</h3>
										<div
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												padding: ' 0% 2%',
											}}
										>
											<p className='desc'>
												<span>Price: ₹{e.price}</span>
											</p>
											<p className='desc'>
												<span>Category: {e.category}</span>
											</p>
										</div>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductComponent;
