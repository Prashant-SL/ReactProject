import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/actions/productActions";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import BackendURLHelpers from "../Helpers/BackendURLHelpers";

export default function ProductDetail() {
  const { BASE_URL } = BackendURLHelpers;
  let navigate = useNavigate();
  const loginData = JSON.parse(localStorage.getItem("login")) || 0;
  var product = useSelector((state) => state.product);
  let cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      const { data: productDetailsResponse } = await axios
        .get(`${BASE_URL}/products/${id}`)
        .catch(({ message }) => {
          window.alert(message);
        });
      dispatch(selectedProduct(productDetailsResponse));
    };

    if (id && id !== "") fetchProductDetail(id);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  const addProductCart = async () => {
    if (loginData.login) {
      await axios
        .post(`${BASE_URL}/cart`, product)
        .then(({ data }) => console.log(data))
        .catch(({ message }) => {
          console.log("Err: ", message);
        });
      toast.success("Product added to the cart successfully");
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } else {
      toast.info("Please Login to Add Product to Cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    }
  };

  return (
    <>
      <Box maxW='95%' m='auto'>
        <Flex direction={{ base: "column", md: "row", lg: "row" }} gap={5}>
          <Box
            w={{ base: "100%", md: "100%", lg: "60%" }}
            borderRadius='10px'
            boxShadow='2xl'
            p='6'
            rounded='md'
            bg='white'
          >
            <Grid
              gap={6}
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              p='10px'
              m='auto'
            >
              <Image
                m={{ base: "auto", md: "auto" }}
                h='250px'
                src={product.images}
              />
              <Image
                m={{ base: "auto", md: "auto" }}
                h='250px'
                src={product.images}
              />
              <Image
                m={{ base: "auto", md: "auto" }}
                h='250px'
                src={product.images}
              />
              <Image
                m={{ base: "auto", md: "auto" }}
                h='250px'
                src={product.images}
              />
            </Grid>
          </Box>
          <Box
            borderRadius='10px'
            textAlign='left'
            boxShadow='2xl'
            p='6'
            rounded='md'
            bg='white'
            w={{ base: "100%", md: "100%", lg: "40%" }}
            lineHeight={2}
          >
            <Heading size='md'>{product.summary}</Heading>
            <br />
            <Text>
              Brand Name:
              <b> {product.brandname}</b>
            </Text>
            <Text>
              Price:
              <b> INR {product.price}</b>
            </Text>
            <Text>
              Screen Size:
              <b> {product.screensize} Inches</b>
            </Text>
            <Text>
              Hard Disk Size
              <b> {product.hard_disik_size}</b>
            </Text>
            <Text>
              Ram Memory:
              <b> {product.ram}</b>
            </Text>
            <Text>
              Operating System:
              <b> {product.os}</b>
            </Text>
            <Text>
              Card Description:
              <b> {product.card_discription}</b>
            </Text>
            <Box textAlign='center' mt='50px'>
              <Button colorScheme='green' onClick={addProductCart}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Flex>
        <ToastContainer />
      </Box>
    </>
  );
}
