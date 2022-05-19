import React from 'react';
import './Checkout.css';
const Checkout = () => {
	return (
		<>
			<div class='wrapper'>
				<div class='container'>
					<form action=''>
						<h1>
							<i class='fas fa-shipping-fast'></i>
							Shipping Details
						</h1>
						<div class='name'>
							<div>
								<label for='f-name'>First Name</label>
								<input type='text' name='f-name' />
							</div>
							<div>
								<label for='l-name'>Last Name</label>
								<input type='text' name='l-name' />
							</div>
						</div>
						<div class='street'>
							<label for='name'>Street</label>
							<input type='text' name='street' />
						</div>
						<div class='address-info'>
							<div>
								<label for='city'>City</label>
								<input type='text' name='city' />
							</div>
							<div>
								<label for='state'>State</label>
								<input type='text' name='state' />
							</div>
						</div>
						<h1>
							<i class='far fa-credit-card'></i> Payment Information
						</h1>
						<div class='cc-num'>
							<label for='card-num'>Credit Card No.</label>
							<input type='text' name='card-num' />
						</div>
						<div class='cc-info'>
							<div>
								<label for='card-num'>Exp</label>
								<input type='text' name='expire' />
							</div>
							<div>
								<label for='card-num'>CCV</label>
								<input type='text' name='security' />
							</div>
						</div>
						<div class='btns'>
							<button>Purchase</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default Checkout;
