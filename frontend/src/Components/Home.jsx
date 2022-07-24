import { Box, Image, Grid, Link } from '@chakra-ui/react';
import React from 'react';
import ProductComponent from './ProductComponent';

export default function Home() {
	return (
		<div>
			{/* <h1>Home Page</h1> */}
			<Box m='auto' mt='5' maxW='95%'>
				<Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
					<Link href='products/62870f3533e19e2fbd54a67d'>
						<Grid
							templateColumns={{
								base: 'repeat(2, 1fr)',
								md: 'repeat(2, 1fr)',
								lg: 'repeat(4, 1fr)',
							}}
							gap={6}
						>
							<Image src='https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-9430/spi/touch/spi-0181-notebook-latitude-14-9430-800x620.png?fmt=png-alpha&wid=800&hei=620'></Image>
							<Image src='https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-7410-touch/pdp/prod-0163-resizing-images-for-category-page-workstation-precision-17-5760-800x620.png?fmt=png-alpha&wid=800&hei=620'></Image>
							<Image src='https://i.dell.com/is/image/DellContent/content/dam/images/products/laptops-and-2-in-1s/vostro/14-5410-non-touch/dv5410nt-cnb-00055lf110-gy.psd?$S7-800x620$&layer=1&perspective=2613,1536,4660,1129,4192,3040,2201,2875&pos=-402,-1040&src=is{DellContent/content/dam/global-asset-library/Lifestyle/Without_Product/Things/backgrounds/exteriors/getty_157719744.psd?size=4000,4000}'></Image>
							<Image src='https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-multiple-products/laptop/la7410t_la5400nt_la5300t_fnb_shot01_gy.png?fmt=png-alpha&wid=800&hei=620'></Image>
						</Grid>
					</Link>
				</Box>
				<Box boxShadow='dark-lg' p='6' rounded='md' bg='white' mt={5}>
					<Link href='products/62870f3533e19e2fbd54a688'>
						<Grid
							templateColumns={{
								base: 'repeat(2, 1fr)',
								md: 'repeat(2, 1fr)',
								lg: 'repeat(4, 1fr)',
							}}
							gap={6}
						>
							<Image src='https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/1/21c1_pavilion_slinky_14_ff_spruceblue_nonfpr_wlan_win10_coreset_tent_4.png'></Image>
							<Image src='https://m.media-amazon.com/images/I/71MEAnpny6L._AC_SX679_.jpg'></Image>
							<Image src='https://m.media-amazon.com/images/I/71XVJms5pZL._AC_SX425_.jpg'></Image>
							<Image src='https://m.media-amazon.com/images/I/711WgtGvrYL._AC_SX450_.jpg'></Image>
						</Grid>
					</Link>
				</Box>
			</Box>
			<ProductComponent />
		</div>
	);
}
