// import React, { useState } from 'react';
// import useFetch from '../hooks/useFetch';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// const ExploreMore = () => {
// 	const [activeButton, setActiveButton] = useState('popularPlaces');
// 	const [select, setSelect] = useState(0);
// 	const { data, loading, error } = useFetch();
// 	// `https://booking-app-backend-three.vercel.app/api/hotel/categorized`
// 	('http://localhost:5000/api/hotel/categorized');
// 	console.log('Fetched Data :', data);

// 	// const handleButtonClick = (buttonName, index) => {
// 	// 	setActiveButton(buttonName);
// 	// 	console.log(activeButton);
// 	// 	setSelect(index);
// 	// 	console.log(select);
// 	// 	data[select];
// 	// 	console.log(data[select].hotels);
// 	// };

// 	const handleButtonClick = (buttonName, index) => {
// 		setActiveButton(buttonName);
// 		console.log(activeButton);
// 		setSelect(index);
// 		console.log(select);
// 		data[select];
// 		console.log(data[select]);
// 		// console.log(data[select].hotels);
// 	};
// 	return (
// 		<div className="p-8" id="explore">
// 			<div className="flex justify-between">
// 				<div className="leading-10">
// 					<h1 className="text-4xl font-bold">Explore More</h1>
// 					<p className="text-[20px] text-gray-600">Let's go on an adventure</p>
// 				</div>
// 				<div className="mr-[50px] text-gray-600">
// 					All-exclusive vacations and flights to the Caribbean, Indonesia, and
// 					<br /> more than 1300 destinations worldwide. Let's explore now!
// 				</div>
// 			</div>
// 			<div className="flex justify-between mt-[20px]">
// 				<div>
// 					<ul className="flex gap-4">
// 						{[
// 							'Popular Destinations',
// 							'Islands',
// 							'Surfing',
// 							'National Parks',
// 							'Lake',
// 							'Beach',
// 							'Bank',
// 						].map((buttonName, index) => (
// 							<li key={buttonName} className="list-none">
// 								<button
// 									onClick={() => handleButtonClick(buttonName, index)}
// 									className={`flex justify-center items-center w-[100px] h-[50px] text-[15px] rounded-full ${
// 										activeButton === buttonName &&
// 										activeButton === buttonName[index]
// 											? 'bg-black text-white'
// 											: 'bg-gray-200 text-gray-600 w-[20px]'
// 									}`}
// 								>
// 									{buttonName}
// 								</button>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 				<div className="flex justify-center items-center w-[100px] h-[50px] bg-gray-200 rounded-full text-gray-600 mr-1.5">
// 					Filters
// 				</div>
// 			</div>
// 			{loading
// 				? 'loading...'
// 				: // <div className="grid grid-cols-3 grid-rows-auto gap-[30px] bg-white rounded-2xl shadow-lg overflow-hidden">
// 				  // 	{data[select] && data[select].hotels.length !== 0
// 				  // 		? data[select].hotels.map((hotel, hotelIndex) => (
// 				  // 				<div className="mt-[50px]">
// 				  // 					<img
// 				  // 						src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
// 				  // 						alt="good"
// 				  // 						className="w-[300px] h-50 bg-white rounded-2xl shadow-lg overflow-hidden"
// 				  // 					/>
// 				  // 					<h1 className="text-white">{hotel.name}</h1>

// 				  // 					<h1 className="text-xl flex">
// 				  // 						<LocationOnIcon />
// 				  // 						{hotel.city} , {hotel.country}
// 				  // 					</h1>
// 				  // 				</div>
// 				  // 		  ))
// 				  // 		: `their is no list for ${activeButton}`}
// 				  // </div>
// 				  'bad'}
// 		</div>
// 	);
// };

// export default ExploreMore;

//////////////////////
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExploreMore = () => {
	const [activeButton, setActiveButton] = useState('Popular Destinations');
	const [select, setSelect] = useState(0);
	const { data, loading, error } = useFetch(
		'https://bookingappbackend-production.up.railway.app/api/hotel/categorized'
		// `http://localhost:5000/api/hotel/categorized`
	);
	console.log('Fetched Data :', data);
	const handleButtonClick = (buttonName, index) => {
		setActiveButton(buttonName);
		setSelect(index);
		// console.log(select[index]);
	};

	return (
		<div className="p-8" id="explore">
			<div className="flex justify-between">
				<div className="leading-10">
					<h1 className="text-4xl font-bold">Explore More</h1>
					<p className="text-[20px] text-gray-600">Let's go on an adventure</p>
				</div>
				<div className="mr-[50px] text-gray-600">
					All-exclusive vacations and flights to the Caribbean, Indonesia, and
					<br /> more than 1300 destinations worldwide. Let's explore now!
				</div>
			</div>
			<div className="flex justify-between mt-[20px]">
				<div>
					<ul className="flex gap-4">
						{[
							'Popular Destinations',
							'Islands',
							'Surfing',
							'National Parks',
							'Lake',
							'Beach',
							'Bank',
						].map((buttonName, index) => (
							<li key={buttonName} className="list-none">
								<button
									onClick={() => handleButtonClick(buttonName, index)}
									className={`flex justify-center items-center w-[100px] h-[50px] text-[15px] rounded-full ${
										activeButton === buttonName
											? 'bg-black text-white'
											: 'bg-gray-200 text-gray-600'
									}`}
								>
									{buttonName}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="flex justify-center items-center w-[100px] h-[50px] bg-gray-200 rounded-full text-gray-600 mr-1.5">
					Filters
				</div>
			</div>
			{loading ? (
				'loading...'
			) : (
				<div className="grid grid-cols-3 grid-rows-auto gap-[30px] bg-white rounded-2xl shadow-lg overflow-hidden">
					{data && data[select] && data[select].hotels.length !== 0 ? (
						data[select].hotels.map((hotel, hotelIndex) => (
							<div key={hotelIndex} className="mt-[50px]">
								<img
									src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
									alt="good"
									className="w-[300px] h-50 bg-white rounded-2xl shadow-lg overflow-hidden"
								/>
								<h1 className="text-white">{hotel.name}</h1>
								<h1 className="text-xl flex">
									<LocationOnIcon />
									{hotel.city}, {hotel.country}
								</h1>
							</div>
						))
					) : (
						<div>There is no list for {activeButton}</div>
					)}
				</div>
				// 'goos'
			)}
		</div>
	);
};

export default ExploreMore;
