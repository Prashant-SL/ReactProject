import React from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { Box } from '@chakra-ui/react';

export default function ProductListing() {
	return (
		<>
			<Box>
				<ProductComponent />
			</Box>
		</>
	);
}
