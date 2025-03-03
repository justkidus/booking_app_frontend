import React from 'react';
const Header = () => {
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
				<button className="text-xl">sign in</button>
				<button className="text-xl">sign up</button>
			</div>
		</div>
	);
};

export default Header;
