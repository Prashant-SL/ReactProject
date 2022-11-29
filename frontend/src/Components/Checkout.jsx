import React, { useState, useEffect } from "react";

import BackendURLHelpers from "../Helpers/BackendURLHelpers";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

export default function Checkout() {
  const { BASE_URL } = BackendURLHelpers;
  const [cart, setcart] = useState([]);

  const loginData = JSON.parse(localStorage.getItem("login")) || 0;

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: cartResponse } = await axios
        .get(`${BASE_URL}/cart/`)
        .catch(({ message }) => {
          console.log("Err: ", message);
        });
      setcart([...cartResponse]);
    };

    fetchProducts();
  }, []);

  var totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += Number(cart[i].price);
  }

  return (
    <>
      <Box maxW='95%' m='auto' mt='10'>
        <Box
          maxW={{ base: "100%", md: "60%", lg: "60%" }}
          m='auto'
          boxShadow='outline'
          p='6'
          rounded='md'
          bg='white'
        >
          <Flex gap='5' direction={{ base: "column", md: "column", lg: "row" }}>
            <Box
              w={{ base: "100%", md: "100%", lg: "50%" }}
              boxShadow='dark-lg'
              p='6'
              rounded='md'
              bg='white'
              bgColor='#FFFAFF'
            >
              <FormControl p='5'>
                <Heading as='h4' size='md' pb={6}>
                  Shipping Details
                </Heading>
                <FormLabel>Name</FormLabel>
                <Input type='text' value={`${loginData.name}`} readOnly />
                <FormLabel>Email</FormLabel>
                <Input type='text' value={`${loginData.email}`} readOnly />
                <FormLabel>Address</FormLabel>
                <Input type='text' placeholder='Enter Shipping Address' />
              </FormControl>
            </Box>
            <Box
              w={{ base: "100%", md: "100%", lg: "50%" }}
              boxShadow='dark-lg'
              p='6'
              rounded='md'
              bg='white'
              bgColor='#FFFAFF'
            >
              <Heading as='h4' size='md' pb={6}>
                Price Value
              </Heading>
              {cart.map((e, index) => {
                return (
                  <Flex justifyContent='space-between' p='5' key={index}>
                    <Heading size='sm'>{e.brandname}</Heading>
                    <Heading size='md'>{e.price}</Heading>
                  </Flex>
                );
              })}
              <Flex justifyContent='space-between' p='5'>
                <Heading size='sm'>Total</Heading>
                <Heading size='md'>{totalPrice}</Heading>
              </Flex>
              <hr></hr>
              <Link href='/payment'>
                <Button mt='5' colorScheme='green'>
                  Proceed to Pay
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
