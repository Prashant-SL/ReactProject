import React from 'react'
import {useSelector} from 'react-redux'
import ProductComponent from './ProductComponent'
import { Box } from '@chakra-ui/react'

export default function ProductListing() {
  const products = useSelector((state) => state);
  console.log(products)
  return (
    <>
      <Box>
        <ProductComponent />
      </Box>
    </>
  )
}
