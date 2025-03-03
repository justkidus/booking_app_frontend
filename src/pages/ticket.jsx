import React, { useState } from 'react';
import plane from '../assets/Classement World Travel Awards _ le meilleur de l’Afrique _ Air Journal.jpg';
const TicketPage = () => {
	const [ticketType, setTicketType] = useState('economy');
	const [quantity, setQuantity] = useState(1);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const ticketPrices = { economy: 50, vip: 100, premium: 150 };
	const totalPrice = ticketPrices[ticketType] * quantity;

	return (
		<div
			className="bg-blue-900 text-white w-[100%] flex rounded-2xl"
			id="ticket"
		>
			<div className="flex justify-center items-center w-[45%] ">
				<div className="p-6 leading-[60px] ">
					<h2 className="text-2xl font-semibold ml-16 mb-2">
						Book Your Ticket
					</h2>
					<div className="flex">
						<label className="block mb-2">Ticket Type :</label>
						<select
							value="Economy - $50"
							onChange={(e) => setTicketType(e.target.value)}
							className="bg-white h-[35px] mt-[15px] text-black"
						>
							<option value="economy" className="bg-blue-900 text-white">
								Economy - $50
							</option>
							<option value="vip" className="bg-blue-900 text-white">
								VIP - $100
							</option>
							<option value="premium" className="bg-blue-900 text-white">
								Premium - $150
							</option>
						</select>
					</div>
					<div className="flex">
						<label className="block">Quantity :</label>
						<input
							type="number"
							value={quantity}
							min="1"
							className="bg-white h-[35px] mt-[15px] text-xl text-black w-[30px]"
							onChange={(e) => setQuantity(Number(e.target.value))}
						/>
					</div>
					<div className="flex">
						<label className="block">Name :</label>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="bg-white h-[35px] mt-[15px] text-black"
						/>
					</div>
					<div className="flex">
						<label className="block">Email :</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-white h-[35px] mt-[15px] text-black"
						/>
					</div>
					<div className="flex">
						<label className="block">Phone : </label>
						<input
							type="tel"
							value={phone}
							className="bg-white h-[35px] mt-[15px] text-black"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<p className="mt-4 font-semibold ml-18">Total Price: ${totalPrice}</p>
					<div className="bg-black w-[140px] h-[40px] flex items-center justify-center ml-[80px]">
						<button className="">Book Now</button>
					</div>
				</div>
			</div>
			<div className="w-[50%] m-[20px]">
				<img src={plane} alt="plane" className="rounded-2xl " />
			</div>
		</div>
	);
};

export default TicketPage;
