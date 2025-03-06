import React, { useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});
	const { loading, error, dispatch } = useContext(AuthContext);
	const handleChange = (e) => {
		setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};
	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGIN_START' });
		try {
			const res = await axios.post(
				'https://bookingappbackend-production.up.railway.app/api/user/login',
				credentials
			);
			dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
			navigate('/');
		} catch (error) {
			dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
		}
	};
	return (
		<div className="flex items-center justify-center text-black border-2 border-black w-[400px] h-[400px] ml-[400px] mt-[100px]">
			<div className="m-[30px]">
				<label>UserName :</label>
				<input
					type="text"
					placeholder="username"
					id="username"
					onChange={handleChange}
					className="border-2 border-black"
				/>
				<br />
				<br />
				<label>Password :</label>
				<input
					type="text"
					placeholder="password"
					id="password"
					onChange={handleChange}
					className="border-2 border-black"
				/>
				<br />
				<br />
				<br />
				<button
					onClick={handleClick}
					className="bg-blue-500 py-[10px] px-[20px] font-bold text-white ml-[100px]"
					disabled={loading}
				>
					Login
				</button>
				{error && <span>Wrong password or username</span>}
			</div>
		</div>
	);
};
export default Login;
