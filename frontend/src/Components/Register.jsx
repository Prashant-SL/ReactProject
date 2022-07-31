import React, { useState } from 'react';
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	FormErrorMessage,
	Heading,
	Flex,
} from '@chakra-ui/react';
import Login from './Login';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
	const initialValue = {
		name: '',
		email: '',
		password: '',
	};

	const [formData, setFormdata] = useState(initialValue);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormdata({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const PostData = (e) => {
		e.preventDefault();
		axios
			.post('https://reactministore.herokuapp.com/register', formData)
			.then((res) => toast.success('Registered Sucessfull'))
			.catch((err) => console.log('err', err));
	};

	return (
		<div>
			<Box maxW='95%' m='auto' mt='5'>
				<Flex gap={10} direction={{ base: 'column', md: 'row', lg: 'row' }}>
					<Box
						w={{ base: '100%', md: '60%', lg: '30%' }}
						boxShadow='outline'
						p='0'
						rounded='md'
						bg='white'
						padding={2}
						mt='10'
						ml={{ base: '0', md: '5%', lg: '20%' }}
					>
						<Heading>Register</Heading>
						<FormControl onSubmit={handleSubmit} method='POST'>
							<FormLabel>Name</FormLabel>
							<Input
								name='name'
								onChange={handleChange}
								type='text'
								placeholder='Enter Name'
							></Input>
							<FormLabel>Email</FormLabel>
							<Input
								name='email'
								onChange={handleChange}
								id='email'
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
							<Button onClick={PostData} type='Submit' mt='5' w='50%'>
								Register
							</Button>
						</FormControl>
					</Box>
					<Login />
				</Flex>
			</Box>
			<ToastContainer />
		</div>
	);
}
