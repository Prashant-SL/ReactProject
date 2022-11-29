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
          window.alert(message);
        });
      setCartDetails([...cartResponse]);
    };
    fetchCartProducts();
  }, []);

  const startPayment = ({ amount, currency, id }) => {
    const priceToBePaid = amount;
    console.log("priceToBePaid", priceToBePaid);
    const options = {
      key: "rzp_test_ClJIw40tzT61oj",
      amount: Number(priceToBePaid),
      currency: currency,
      name: "React Mini Store",
      description: "Test Transaction",
      image:
        "https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      order_id: id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${BASE_URL}/api/payment/verify`,
            response
          );
          alert("Payment Successfull");
        } catch (error) {
          window.alert(message);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  let totalPrice = 0;
  for (let i = 0; i < cartDetails.length; i++) {
    totalPrice += Number(cartDetails[i].price);
  }
  const handlePayment = async () => {
    try {
      const orderUrl = `${BASE_URL}/api/payment/orders`;
      const { data } = await axios.post(orderUrl, { amount: totalPrice });
      startPayment(data.data);
    } catch (err) {
      window.alert(err.message);
    }
  };

  return (
    <div className='App'>
      <div
        className='book_container'
        style={{ width: "25%", marginTop: "3%", margin: "auto" }}
      >
        <img
          src='https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='book_img'
          className='book_img'
        />
        <p className='book_name'>Proceed to Pay</p>
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
