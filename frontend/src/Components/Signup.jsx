import React from 'react';
import './Signup.css';

const Signup = () => {
	return (
		<>
			<main>
				<div className='row'>
					<div className='colm-form'>
						<div className='form-container'>
							<input type='text' placeholder='Enter your full name' />
							<input type='text' placeholder='Enter your age' />
							<input type='text' placeholder='Enter your email' />
							<input type='password' placeholder='Enter new password' />
							<button className='btn-login'>Create new account</button>
						</div>
						<p>
							Already have an account? <a href='/login'>Login Now</a>
						</p>
					</div>
				</div>
			</main>
		</>
	);
};
export default Signup;
