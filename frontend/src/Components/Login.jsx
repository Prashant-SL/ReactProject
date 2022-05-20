import React from 'react';
import Signup from './Signup';
import './Login.css';

const Login = () => {
	return (
		<div style={{ display: 'flex' }}>
			<div>
				<Signup />
			</div>
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
		</div>
	);
};
export default Login;
