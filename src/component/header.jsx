import React from 'react';

const Header = () => {
	return (
		<div className="justify-between flex">
			<div>
				<h1 className="font-bold text-3xl text-[black]">Booking-app</h1>
			</div>

			<div className="hidden md:flex">
				<ul className="flex gap-[40px] ">
					<li className="text-xl">Home</li>
					<li className="text-xl">Ticket</li>
					<li className="text-xl">Explore</li>
					<li className="text-xl">Activity</li>
				</ul>
			</div>

			<div className="flex gap-[20px]">
				<button className="text-xl">sign in</button>
				<button className="text-xl">sign up</button>
			</div>
		</div>
	);
};

export default Header;
