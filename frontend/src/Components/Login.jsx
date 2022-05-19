import React from 'react';
import './Login.css';

const Login = () => {
	return (
		<>
			<main>
				<div className='row'>
					<div className='colm-form'>
						<div className='form-container'>
							<input type='text' placeholder='Email address or phone number' />
							<input type='password' placeholder='Password' />
							<button className='btn-login'>Login</button>
						</div>
						<p>
							Not have an account? <a href='/signup'>Sign Up Now</a>
						</p>
					</div>
				</div>
			</main>
		</>
	);
};
export default Login;
