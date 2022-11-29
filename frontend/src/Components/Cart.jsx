import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Box,
  Link,
  Flex,
  Heading,
  Text,
  Image,
  Grid,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

import BackendURLHelpers from "../Helpers/BackendURLHelpers";

export default function Cart() {
  const { BASE_URL } = BackendURLHelpers;

  const [cart, setcart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: cartData } = await axios
        .get(`${BASE_URL}/cart`)
        .catch(({ message }) => {
          return message;
        });
      setcart([...cartData]);
    };

    fetchProducts();
  }, []);

  const removeProduct = async (id) => {
    await axios.delete(`${BASE_URL}/cart/${id}`).then(console.log("deleted"));

    toast.success("Product has been removed from the cart");
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };

  window.localStorage.getItem("login");

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += Number(cart[i].price);
  }

  return (
    <div>
      <Box maxW='95%' m='auto'>
        <Flex gap={20} direction={{ base: "column", md: "row", lg: "row" }}>
          <Box maxW='70%' m={{ base: "auto", md: "0", lg: "0" }}>
            {cart?.map((e) => {
              return (
                <Box
                  borderRadius={5}
                  textDecoration='none'
                  mt='10px'
                  p='2%'
                  boxShadow='outline'
                  rounded='md'
                  bg='white'
                >
                  <Flex direction={{ base: "column", md: "row", lg: "row" }}>
                    <Box maxW='200px'>
                      <Image h='100%' src={e.images[0]}></Image>
                    </Box>
                    <Box
                      textAlign='left'
                      pl='9%'
                      w={{ base: "100%", md: "70%", lg: "100%" }}
                    >
                      <Heading pb='3%' size='sm'>
                        {e.summary}
                      </Heading>
                      <Grid
                        gap={2}
                        templateColumns={{
                          base: "repeat(1, 1fr)",
                          md: "repeat(2, 1fr)",
                          lg: "repeat(4, 1fr)",
                        }}
                      >
                        <Text>
                          <b>Brand: </b>
                          {e.brandname}
                        </Text>
                        <Text>
                          <b>Price: </b>
                          {e.price}
                        </Text>
                        <Text>
                          <b>Color: </b>
                          {e.color}
                        </Text>
                        <Text>
                          <b>Size: </b>
                          {e.screensize}
                        </Text>
                        <Text>
                          <b>HDD: </b>
                          {e.hard_disk_size}
                        </Text>
                        <Text>
                          <b>RAM: </b>
                          {e.ram}
                        </Text>
                        <Text>
                          <b>OS: </b>
                          {e.os}
                        </Text>
                        <Text>
                          <b>Graphics: </b>
                          {e.card_discription}
                        </Text>
                      </Grid>
                    </Box>
                  </Flex>
                  <Box ml={{ base: "0", md: "40%", lg: "40%" }} w='100%'>
                    <Flex
                      gap={2}
                      direction={{ base: "column", md: "row", lg: "row" }}
                      w={{ base: "100%", md: "100%", lg: "100%" }}
                    >
                      <Button onClick={() => removeProduct(e._id)}>
                        Remove
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              );
            })}
          </Box>
          {cart?.length > 0 ? (
            <Box
              m='auto'
              boxShadow='outline'
              rounded='md'
              bg='white'
              mt='.7%'
              p='2%'
            >
              <Heading
                color='teal'
                borderBottom='1px'
                rounded='md'
                size='lg'
                mb='4'
              >
                Cart Summary
              </Heading>
              <Text fontSize={20}>
                Total Quantity:
                <b> {cart.length}</b>
              </Text>
              <Text fontSize={20}>
                Total Price:
                <b> {totalPrice}</b>
              </Text>
              <Link href='/checkout'>
                <Button colorScheme='green' variant='solid' mb='2%' mt='9%'>
                  Checkout
                </Button>
              </Link>
            </Box>
          ) : (
            <Heading as='h1' size='2xl' noOfLines={1} pt='20'>
              Please add items to cart
            </Heading>
          )}
        </Flex>
      </Box>
      <ToastContainer />
    </div>
  );
}
