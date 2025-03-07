// import React from 'react';
// import useFetch from '../hooks/useFetch';
// const SideBar = () => {
// 	const { data, loading, error } = useFetch(
// 		'http://localhost:5000/api/hotel/getallhotel?min=1&max=50&limit=5'
// 	);
// 	console.log(data);
// 	return (
// 		<div className="w-[100%] flex gap-[20px]">
// 			<div className="bg-[gray] w-[35%] h-[90vh] leading-[30px]">
// 				<h1 className="text-2xl">Search Hotel</h1>
// 				<h2 className="text-xl">Destination</h2>
// 				<input type="text" placeholder="Addis Ababa" className="bg-white" />
// 				<h2>Check-in Date</h2>
// 				<input
// 					type="text"
// 					placeholder="20/06/17 || 20/06/17"
// 					className="bg-white"
// 				/>
// 				<h1 className="text-2xl">Option</h1>
// 				<ul className="leading-[30px]">
// 					<div className="flex gap-[15px]">
// 						<li>Min Price Per Night </li>
// 						<input
// 							type="number"
// 							placeholder="0"
// 							className="w-[50px] bg-[white] leading-[10px]"
// 						/>
// 					</div>
// 					<div className="flex gap-[15px]">
// 						<li>Max Price Per Night </li>
// 						<input
// 							type="number"
// 							placeholder="0"
// 							className="w-[50px] bg-[white] leading-[10px]"
// 						/>
// 					</div>
// 					<div className="flex gap-[15px]">
// 						<li>Adult </li>
// 						<input
// 							type="number"
// 							placeholder="0"
// 							className="w-[50px] bg-[white] leading-[10px]"
// 						/>
// 					</div>
// 					<div className="flex gap-[15px]">
// 						<li>Children </li>
// 						<input
// 							type="number"
// 							placeholder="0"
// 							className="w-[50px] bg-[white] leading-[10px]"
// 						/>
// 					</div>
// 					<div className="flex gap-[15px]">
// 						<li>Room </li>
// 						<input
// 							type="number"
// 							placeholder="0"
// 							className="w-[50px] bg-[white] leading-[10px]"
// 						/>
// 					</div>
// 				</ul>
// 			</div>
// 			<div>
// 				{loading ? (
// 					'Loading'
// 				) : (
// 					<>
// 						{data.map((item) => (
// 							// <div className="fpItem" key={item._id}>
// 							// 	<img
// 							// 		src="https://picsum.photos/150/150"
// 							// 		alt=""
// 							// 		className=""
// 							// 	/>
// 							// 	<span className="fpName">{item.name}</span>
// 							// 	<span className="fpCity">{item.city}</span>
// 							// 	<span className="fpPrice">
// 							// 		Starting from ${item.cheapestPrice}
// 							// 	</span>
// 							// 	{item.rating && (
// 							// 		<div className="fpRating">
// 							// 			<button>{item.rating}</button>
// 							// 			<span>Excellent</span>
// 							// 		</div>
// 							// 	)}
// 							// </div>
// 							<div className="searchItem" key={item.name}>
// 								{/* <img src={item.image[0]} alt="" className="siImg" /> */}
// 								<img
// 									src="https://picsum.photos/150/150"
// 									alt=""
// 									className="siImg"
// 								/>
// 								<div className="siDesc">
// 									<h1 className="siTitle">{item.name}</h1>
// 									<span className="siDistance">
// 										{item.distance}m from center
// 									</span>
// 									<span className="siTaxiOp">Free airport taxi</span>
// 									<span className="siSubtitle">
// 										Studio Apartment with Air conditioning
// 									</span>
// 									<span className="siFeatures">{item.description}</span>
// 									<span className="siCancelOp">Free cancellation </span>
// 									<span className="siCancelOpSubtitle">
// 										You can cancel later, so lock in this great price today!
// 									</span>
// 								</div>
// 								<div className="siDetails">
// 									{item.rating && (
// 										<div className="siRating">
// 											<span>Excellent</span>
// 											<button>{item.rating}</button>
// 										</div>
// 									)}
// 									<div className="siDetailTexts">
// 										<span className="siPrice">${item.cheapestPrice}</span>
// 										<span className="siTaxOp">Includes taxes and fees</span>
// 										{/* <Link to={`/hotels/${item._id}`}>
// 						<button className="siCheckButton">See availability</button>
// 					</Link> */}
// 									</div>
// 								</div>
// 							</div>
// 						))}
// 					</>
// 				)}
// 				<h1>hotel lists</h1>
// 			</div>
// 		</div>
// 	);
// };
// export default SideBar;

//////////////////////////////////////

import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Main style file
import 'react-date-range/dist/theme/default.css'; // Theme styles
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SideBar = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(
		location.state?.destination || ''
	);
	const [dates, setDates] = useState(
		location.state?.date || [{ startDate: new Date(), endDate: new Date() }]
	);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(
		location.state.options || {
			adult: 1,
			children: 0,
			room: 1,
		}
	);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);
	const { data, loading, error, reFetch } = useFetch(
		// `http://localhost:5000/api/hotel/getallhotel?min=1&max=1000&limit=5`
		`https://bookingappbackend-production.up.railway.app/api/hotel/getallhotel?min=1&max=1000&limit=5`
	);

	const handleClick = () => {
		reFetch();
	};

	return (
		<div className="flex bg-[#313743] text-white w-[100%]">
			{/* <Navbar />
			<Header type="list" /> */}
			<div className="ml-[40px] mt-[30px] leading-[40px] w-[30%] bg-[#313743] border-2 h-[70vh]">
				<div className="flex justify-center items-center">
					<div className="ml-[20px]">
						<h1 className="text-[26px] mb-[20px] text-center mt-[5px]">
							Search
						</h1>
						<div className="lsItem">
							<label>Destination</label>
							<input
								placeholder={destination}
								type="text"
								onChange={(e) => setDestination(e.target.value)}
								className="ml-[20px] rounded-[20px] placeholder:text-center border-2 w-[160px] h-[30px]"
							/>
						</div>
						<div className="lsItem">
							<label>Check-in Date</label>
							<span
								onClick={() => setOpenDate(!openDate)}
								className="ml-[30px] border-2 rounded-2xl"
							>{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
								dates[0].endDate,
								'MM/dd/yyyy'
							)}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDates([item.selection])}
									minDate={new Date()}
									ranges={dates}
									className="p-[10px]"
								/>
							)}
						</div>
						<div className="">
							<label className="text-xl ">Options</label>
							<div className="lsOptions">
								<div className="">
									<span className="">
										Min price <small>per night</small>
									</span>
									<input
										type="number"
										onChange={(e) => setMin(e.target.value)}
										className="rounded-2xl border-2 ml-[10px] h-[35px]"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input
										type="number"
										onChange={(e) => setMax(e.target.value)}
										className="rounded-2xl border-2 ml-[10px] h-[35px]"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									<input
										type="number"
										min={1}
										className="rounded-2xl border-2 ml-[10px] h-[35px] placeholder:text-center placeholder:text-white text-[20px]"
										placeholder={options.adult}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Children</span>
									<input
										type="number"
										min={0}
										className="rounded-2xl border-2 ml-[10px] h-[35px] placeholder:text-center placeholder:text-white text-[20px]"
										placeholder={options.children}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									<input
										type="number"
										min={1}
										className="rounded-2xl border-2 ml-[10px] h-[35px] placeholder:text-center placeholder:text-white text-[20px]"
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button
							onClick={handleClick}
							className="ml-[110px] text-xl rounded-2xl border-2 px-[15px] mt-[20px]"
						>
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="listResult">
				{loading ? (
					'loading'
				) : (
					<>
						<div className="w-[50%] ml-[20px] mt-[30px] ">
							<div className="overflow-auto scroll-smooth h-[90vh] w-[750px]">
								{data.map((item) => (
									<div
										className="flex bg-white w-[750px] h-auto border-2 border-black mb-[20px] justify-evenly leading-[30px]"
										key={item._id}
									>
										<div className="">
											<img
												src="https://picsum.photos/150/150"
												alt=""
												className="w-[220px] h-[220px] m-[10px]"
											/>
										</div>
										<div className="mt-[5px] w-[300px] leading-[28px] ml-[10px]">
											<span className="text-black font-bold text-2xl">
												{item.name}
											</span>
											<br />
											<span className="text-black ml-[-10px]">
												<LocationOnIcon />
												{/* {item.city},{item.country} */}
												{item.address}
											</span>
											<br />
											<span className="text-black">{item.distance}.</span>
											<br />
											<span className="bg-green-600 p-[2px]">
												Free airport taxi
											</span>
											<br />
											<span className="text-black">{item.description}</span>
											<br />
											<span className="text-black">{item.title}</span>
											<br />
											<span className="text-white bg-red-600 p-[2px]">
												Free Cancellation
											</span>
											<br />
										</div>
										<div className="mt-[25px] justify-end mr-[-15px]">
											<span className="text-black font-bold">
												Starting from <br />
												<span className="text-xl mr-[20px]">
													${item.cheapestPrice}
												</span>
											</span>
											{item.rating && (
												<div className="text-black">
													<button className="text-xl mr-[5px]">
														{item.rating}{' '}
													</button>
													<span className="text-green-500 font-bold">
														Excellent
													</span>
													<br />
													<br />
													<button className="bg-blue-500 p-[3px] text-white">
														<Link to={`/book/${item._id}`}>
															<h1>See Availability</h1>
														</Link>
													</button>
												</div>
											)}
										</div>
									</div>
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default SideBar;
