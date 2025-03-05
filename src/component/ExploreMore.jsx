import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExploreMore = () => {
	const [activeButton, setActiveButton] = useState('popularPlaces'); // Track the active button
	const [select, setSelect] = useState(0);
	const images = [
		{
			name: 'Taj Mahal',
			city: 'Agra',
			country: 'India',
			image_link:
				'https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
		},
		{
			name: 'Eiffel Tower',
			city: 'Paris',
			country: 'France',
			image_link:
				'https://images.unsplash.com/photo-1566073771259-6a8506099945',
		},
		{
			name: 'Great Wall of China',
			city: 'Beijing',
			country: 'China',
			image_link:
				'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
		},
		{
			name: 'Machu Picchu',
			city: 'Cusco',
			country: 'Peru',
			image_link:
				'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
		},
		{
			name: 'Statue of Liberty',
			city: 'New York City',
			country: 'USA',
			image_link:
				'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
		},
		{
			name: 'Sydney Opera House',
			city: 'Sydney',
			country: 'Australia',
			image_link:
				'https://images.unsplash.com/photo-1475483768296-6163e08872a1',
		},
	];

	const { data, loading, error } = useFetch(
		'https://booking-app-phi-weld.vercel.app/api/hotel/categorized'
	);
	// console.log('Fetched Data :', data[5]);
	const handleButtonClick = (buttonName, index) => {
		setActiveButton(buttonName); // Set the active button
		console.log(activeButton);
		setSelect(index);
		console.log(select);
		data[select];
		console.log(data[select].hotels);
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
										activeButton === buttonName &&
										activeButton === buttonName[index]
											? 'bg-black text-white'
											: 'bg-gray-200 text-gray-600 w-[20px]'
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
					{data[select] && data[select].hotels.length !== 0
						? data[select].hotels.map((hotel, hotelIndex) => (
								<div className="mt-[50px]">
									<img
										src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
										alt="good"
										className="w-[300px] h-50 bg-white rounded-2xl shadow-lg overflow-hidden"
									/>
									<h1 className="text-white">{hotel.name}</h1>
									<h1>
										<h1 className="text-xl flex">
											<LocationOnIcon />
											{hotel.city} , {hotel.country}
										</h1>
									</h1>
								</div>
						  ))
						: `their is no list for ${activeButton}`}
				</div>
			)}
		</div>
	);
};

export default ExploreMore;

/////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { useFetcher } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';

// const ExploreMore = () => {
// 	const [activeButton, setActiveButton] = useState(null); // Track the active button
// 	// const [categorizedHotels, setCategorizedHotels] = useState([]);

// 	const images = [
// 		{
// 			name: 'Taj Mahal',
// 			city: 'Agra',
// 			country: 'India',
// 			image_link:
// 				'https://upload.wikimedia.org/wikipedia/commons/6/67/Taj_Mahal_in_India_-_Kristian_Bertel.jpg',
// 		},
// 		{
// 			name: 'Eiffel Tower',
// 			city: 'Paris',
// 			country: 'France',
// 			image_link:
// 				'https://images.unsplash.com/photo-1566073771259-6a8506099945',
// 		},
// 		{
// 			name: 'Great Wall of China',
// 			city: 'Beijing',
// 			country: 'China',
// 			image_link:
// 				'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
// 		},
// 		{
// 			name: 'Machu Picchu',
// 			city: 'Cusco',
// 			country: 'Peru',
// 			image_link:
// 				'https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg',
// 		},
// 		{
// 			name: 'Statue of Liberty',
// 			city: 'New York City',
// 			country: 'USA',
// 			image_link:
// 				'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
// 		},
// 		{
// 			name: 'Sydney Opera House',
// 			city: 'Sydney',
// 			country: 'Australia',
// 			image_link:
// 				'https://images.unsplash.com/photo-1475483768296-6163e08872a1',
// 		},
// 	];

// 	const handleButtonClick = (buttonName) => {
// 		setActiveButton(buttonName); // Set the active button
// 	};
// 	const { data, loading, error } = useFetch(
// 		'http://localhost:5000/api/hotel/categorized'
// 	);
// 	console.log('Fetched Data :', data[0]);
// 	// useEffect(() => {
// 	// 	const fetchHotels = async () => {
// 	// 		try {
// 	// 			const response = await fetch(
// 	// 				'http://localhost:5000/api/hotel/categorized'
// 	// 			);
// 	// 			const data = await response.json();
// 	// 			setCategorizedHotels(data);
// 	// 			console.log(data);
// 	// 		} catch (error) {
// 	// 			console.error('Error fetching hotels:', error);
// 	// 		}
// 	// 	};

// 	// 	fetchHotels();
// 	// }, []);

// 	// const showCategory = (categoryName) => {
// 	// 	const category = categorizedHotels.find((c) => c.category === categoryName);
// 	// 	if (category) {
// 	// 		const hotelList = document.getElementById('hotel-list');
// 	// 		hotelList.innerHTML = '';
// 	// 		category.hotels.forEach((hotel) => {
// 	// 			const hotelElement = document.createElement('div');
// 	// 			hotelElement.textContent = hotel.name;
// 	// 			hotelList.appendChild(hotelElement);
// 	// 		});
// 	// 	}
// 	// };

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
// 						].map((buttonName) => (
// 							<li key={buttonName} className="list-none">
// 								<button
// 									onClick={() => handleButtonClick(buttonName)}
// 									className={`flex justify-center items-center w-[100px] h-[50px] text-[15px] rounded-full ${
// 										activeButton === buttonName
// 											? 'bg-black text-white'
// 											: 'bg-gray-200 text-gray-600'
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
// 			<div className="grid grid-cols-3 gap-6 mt-[50px]">
// 				{images.map((image) => (
// 					<div
// 						key={image.name}
// 						className="bg-white rounded-2xl shadow-lg overflow-hidden"
// 					>
// 						<img
// 							src={image.image_link}
// 							alt={image.name}
// 							className="w-full h-48 object-cover"
// 						/>
// 						<div className="p-4">
// 							<h1 className="text-xl font-bold">{image.name}</h1>
// 							<p className="text-gray-600">
// 								{image.city}, {image.country}
// 							</p>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default ExploreMore;
