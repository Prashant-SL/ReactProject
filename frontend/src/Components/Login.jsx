import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Login() {
	let navigate = useNavigate();
	const initialValue = {
		email: '',
		password: '',
	};

	const [formData, setFormdata] = useState(initialValue);

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log('value:', value);
		setFormdata({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted button');
	};

	const PostData = async (e) => {
		e.preventDefault();
		await axios
			.post('https://rvsn.herokuapp.com/login', formData)
			.then((res) => {
				console.log('result', res.data.token);
				window.localStorage.setItem(
					'login',
					JSON.stringify({
						login: true,
						token: res.data.token,
						name: res.data.user.name,
						email: res.data.user.email,
					})
				);
				if (res.status == 400) {
					window.alert('Please try with another email');
				} else {
					window.alert('Logged In Sccessfully');
					navigate('/');
					window.location.reload();
				}
			})
			.catch((err) => {
				console.log('err', err);
				if (err) {
					window.alert('Please try with another email');
				}
			});
	};
	let newObject = window.localStorage.getItem('login');
	console.log('login', newObject);
	return (
		<div>
			<Box mt='5' w='100%'>
				<Box
					boxShadow='outline'
					p='0'
					rounded='md'
					bg='white'
					padding={2}
					mt='10'
					w='100%'
				>
					<Heading>Login</Heading>
					<FormControl onSubmit={handleSubmit} method='POST'>
						<FormLabel>Email</FormLabel>
						<Input
							name='email'
							onChange={handleChange}
							type='text'
							placeholder='Enter Email'
						></Input>
						<FormLabel>Password</FormLabel>
						<Input
							name='password'
							onChange={handleChange}
							type='password'
							placeholder='Enter Password'
						></Input>
						<Button onClick={PostData} mt='5' w='50%'>
							Login
						</Button>
					</FormControl>
				</Box>
			</Box>
		</div>
	);
}
