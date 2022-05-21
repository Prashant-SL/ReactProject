import { Box, Heading, Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

export default function Payment() {
  const payment=()=>{
    window.alert("Payment Sucessfull and Your Order has been placed")
    
  }
  return (
    <>
      <Box maxW="95%" m='auto'>
          <Heading size='md'>Payment Page</Heading>
        <Box w={{base:"80%",md:"50%", lg:"30%"}} border='1px solid black' borderRadius='10' mt='5px' p='5' m='auto' textAlign='left'>
          <FormControl>
            <FormLabel>ATM Number</FormLabel>
          <Input type='text' placeholder='Enter atm card Number'></Input>
          <FormLabel>Expiry Date</FormLabel>
          <Input type='date' placeholder='Enter atm card Number'></Input>
          <FormLabel>CVV</FormLabel>
          <Input type='text' placeholder='Enter cvv'></Input>
          </FormControl>
        </Box>
          <Button mt='3' onClick={payment}>Make Payment</Button>
      </Box>
    </>
  )
}
