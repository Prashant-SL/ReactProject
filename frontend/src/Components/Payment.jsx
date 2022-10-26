import React, { useState, useEffect } from "react";

import axios from "axios";
import BackendURLHelpers from "../Helpers/BackendURLHelpers";

const Payment = () => {
  const { BASE_URL } = BackendURLHelpers;
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      const { data: cartResponse } = await axios
        .get(`${BASE_URL}/cart/`)
        .catch(({ message }) => {
          console.log("Err: ", message);
        });
      setCartDetails([...cartResponse]);
    };
    fetchCartProducts();
  }, []);

  const [book, setBook] = useState({
    name: "Amount to be paid is - ",
    img: "https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  let totalPrice = 0;
  console.log("cartDetailscartDetailscartDetails", cartDetails);
  for (let i = 0; i < cartDetails.length; i++) {
    totalPrice += Number(cartDetails[i].price);
  }

  const startPayment = (data) => {
    const options = {
      key: "rzp_test_ClJIw40tzT61oj",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${BASE_URL}/api/payment/verify`,
            response
          );
          alert("Payment Successfull");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = `${BASE_URL}/api/payment/orders`;
      const { data } = await axios.post(orderUrl, { amount: totalPrice });
      startPayment(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='App'>
      <div
        className='book_container'
        style={{ width: "25%", marginTop: "3%", margin: "auto" }}
      >
        <img src={book.img} alt='book_img' className='book_img' />
        <p className='book_name'>{book.name}</p>
        <h1 className='book_price'>
          <b>&#x20B9; {totalPrice}</b>
        </h1>
        <button
          style={{
            marginTop: "4%",
            backgroundColor: "#38A169",
            padding: "2% 4%",
            color: "white",
          }}
          onClick={handlePayment}
          className='buy_btn'
        >
          Pay now
        </button>
      </div>
    </div>
  );
};

export default Payment;
