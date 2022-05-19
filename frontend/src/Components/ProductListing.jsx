import React, { useEffect, useCallback, useMemo, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<ProductComponent />
			</div>
		</>
	);
};

export default ProductListing;
