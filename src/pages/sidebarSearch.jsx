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
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

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
	const { data, loading, error } = useFetch(
		`http://localhost:5000/api/hotel/getallhotel?city=${destination}&min=${min}&max=${max}&limit=5`
	);

	const handleClick = () => {
		reFetch();
	};

	return (
		<div>
			{/* <Navbar />
			<Header type="list" /> */}
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label>Destination</label>
							<input
								placeholder={destination}
								type="text"
								onChange={(e) => setDestination(e.target.value)}
							/>
						</div>
						<div className="lsItem">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								dates[0].startDate,
								'MM/dd/yyyy'
							)} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDates([item.selection])}
									minDate={new Date()}
									ranges={dates}
								/>
							)}
						</div>
						<div className="lsItem">
							<label>Options</label>
							<div className="lsOptions">
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									<input
										type="number"
										onChange={(e) => setMin(e.target.value)}
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input
										type="number"
										onChange={(e) => setMax(e.target.value)}
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									<input
										type="number"
										min={1}
										className="lsOptionInput"
										placeholder={options.adult}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Children</span>
									<input
										type="number"
										min={0}
										className="lsOptionInput"
										placeholder={options.children}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									<input
										type="number"
										min={1}
										className="lsOptionInput"
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button onClick={handleClick}>Search</button>
					</div>
					<div className="listResult">
						{loading ? (
							'loading'
						) : (
							<>
								{data.map((item) => (
									<div className="fpItem" key={item._id}>
										<img
											src="https://picsum.photos/150/150"
											alt=""
											className=""
										/>
										<span className="fpName">{item.name}</span>
										<span className="fpCity">{item.city}</span>
										<span className="fpPrice">
											Starting from ${item.cheapestPrice}
										</span>
										{item.rating && (
											<div className="fpRating">
												<button>{item.rating}</button>
												<span>Excellent</span>
											</div>
										)}
									</div>
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
