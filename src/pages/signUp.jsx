// import React from 'react';
// import useFetch from '../hooks/useFetch';
// const signUp = () => {
// 	const { data, loading, reFetch, error } = useFetch(
// 		`http://localhost:5000/api/user/register`
// 	);
//     data.username="",
//     data.password="",
//     data.password=""
// const handleSearch=(e)=>{
//     e.preventDefault();
// }
// 	return (
// 		<div className="flex justify-center items-center">
// 			<div className="leading-[20px]">
// 				<label>username:</label>
// 				<input type="text" />
// 				<label>Email:</label>
// 				<input type="text" placeholder="example@gmail.com" />
// 				<label>password</label>
// 				<input type="text" />
// 			</div>
// 		</div>
// 	);
// };
// export default signUp;

////////////////////////
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const navigate = useNavigate();
	// Handle input change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		try {
			const response = await axios.post(
				'https://bookingappbackend-production.up.railway.app/api/user/register',
				formData
			);
			setSuccess(response.data.message);
			navigate('/login');
			setFormData({ username: '', email: '', password: '' }); // Reset form
		} catch (err) {
			setError(err.response?.data?.message || 'Something went wrong');
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-xl font-bold text-center mb-4">Sign Up</h2>

				{error && <p className="text-red-500 text-center">{error}</p>}
				{success && <p className="text-green-500 text-center">{success}</p>}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700">Username</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700">Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700">Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							className="w-full p-2 border border-gray-300 rounded"
							required
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
					>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
