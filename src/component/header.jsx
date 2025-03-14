import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

const Header = () => {
	const { user, dispatch } = useContext(AuthContext);

	// Handle logout
	const handleLogout = () => {
		localStorage.removeItem('user');
		dispatch({ type: 'LOGOUT' });

		toast.success('Logout successful!', {
			position: 'top-right',
			autoClose: 3000, // Disappear after 3 seconds
		});
	};

	return (
		<div className="justify-between md:gap-[10px] flex">
			<div>
				<h1 className="font-bold text-2xl text-[black] sm:text-3xl">
					Booking-app
				</h1>
			</div>

			<div className="hidden md:flex cursor-pointer">
				<ul className="flex gap-[40px]">
					<a href="/#home">
						<li className="text-xl">Home</li>
					</a>
					<a href="/#ticket">
						<li className="text-xl">Ticket</li>
					</a>
					<a href="/#explore">
						<li className="text-xl">Explore</li>
					</a>
					<a href="/#activity">
						<li className="text-xl">Activity</li>
					</a>
				</ul>
			</div>

			<div className="flex gap-[20px]">
				{user ? (
					<div className="flex gap-[10px}">
						<AccountCircleIcon className="w-[35px] h-[25px] text-gray-500 mt-[10px] " />
						<h1 className="text-[20px] mt-[5px] font-bold mr-[20px]">
							{user.username}
						</h1>
						<button
							onClick={handleLogout}
							className="font-bold mr-[-10px] mt-[5px] text-[18px]"
						>
							Log out
						</button>
					</div>
				) : (
					<div className="">
						<button className="text-xl mr-[20px] cursor-pointer">
							<Link to="/login">Sign in</Link>
						</button>
						<button className="text-xl cursor-pointer">
							<Link to="/signup">Sign up</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
