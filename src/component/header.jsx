import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className="justify-between flex">
			<div>
				<h1 className="font-bold text-3xl text-[black]">Booking-app</h1>
			</div>

			<div className="hidden md:flex cursor-pointer">
				<ul className="flex gap-[40px] ">
					<a href="/#home">
						<li className="text-xl">Home</li>
					</a>
					<a href="/#ticket">
						<li className="text-xl">Ticket</li>
					</a>
					<a href="/#explore">
						<li className="text-xl">Explore</li>
					</a>
					<a to="/#activity">
						<li className="text-xl">Activity</li>
					</a>
				</ul>
			</div>

			<div className="flex gap-[20px]">
				{user ? (
					<div className="flex gap-[7px]">
						<AccountCircleIcon className="w-[25px] h-[15px] text-gray-500" />{' '}
						<h1 className="text-[20px] mt-[-3px]">{user.username}</h1>
					</div>
				) : (
					<div className="">
						<button className="text-xl mr-[20px]">
							<Link to="/login">sign in</Link>
						</button>
						<button className="text-xl">
							<Link to="/signUp">sign up</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
