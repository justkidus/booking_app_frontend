// import React, { useState } from 'react';

// const ExploreMore = () => {
// 	const [clicked, setClicked] = useState(null);
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

// 	const handleClick = (buttonName) => {
// 		setClicked(buttonName);
// 	};
// 	return (
// 		<div>
// 			<div className="flex justify-between">
// 				<div className="leading-10 ">
// 					<h1 className="text-4xl font-bold"> Explore more</h1>
// 					<p className="text-[20px] text-gray">Let's go on an adventure</p>
// 				</div>
// 				<div className="mr-[50px]">
// 					All-exclusive vacations and flights to the caribbean,Indonisia,and
// 					<br /> more than 1300 destination world wide.Let's explore now
// 				</div>
// 			</div>
// 			<div className="flex justify-between mt-[20px]">
// 				<div className="">
// 					<ul className="flex  gap-1">
// 						<div className="flex justify-center items-center w-[170px] h-[50px]  text-white rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								{' '}
// 								<li className="text-gray  list-none ml-[5px]">
// 									<span className="">Popular </span>destinations
// 								</li>
// 							</button>
// 						</div>
// 						<div className="flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								{' '}
// 								<li className="text-gray list-none">Islands</li>
// 							</button>
// 						</div>
// 						<div className="flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								<li className="text-gray list-none">Surfing</li>
// 							</button>
// 						</div>
// 						<div className="flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								<li className="text-gray list-none ">Nation Parks</li>
// 							</button>
// 						</div>
// 						<div className="flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								<li className="text-gray list-none">Lake</li>
// 							</button>
// 						</div>
// 						<div className="flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								<li className="text-gray list-none">Beach</li>
// 							</button>
// 						</div>
// 						<div className="flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 							<button
// 								onClick={handleClick}
// 								className={clicked ? 'bg-black text-white' : ''}
// 							>
// 								<li className="text-gray list-none">Bank</li>
// 							</button>
// 						</div>
// 					</ul>
// 				</div>
// 				<div className="mr-[50px] flex justify-center items-center w-[100px] h-[50px]  rounded-4xl">
// 					Filters
// 				</div>
// 			</div>
// 			<div className="grid grid-cols-3 grid-rows-2 gap-[10px] mt-[50px]">
// 				{images.map((imagee) => (
// 					<div className="" key={imagee.name}>
// 						<img
// 							src={imagee.image_link}
// 							alt={imagee.name}
// 							className="rounded-2xl "
// 						/>
// 						<h1>{imagee.name}</h1>
// 						<p>
// 							<span>{imagee.city}</span>,{imagee.country}
// 						</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default ExploreMore;

////////////////////////////////////////////

import React, { useState } from 'react';

const ExploreMore = () => {
	const [activeButton, setActiveButton] = useState(null); // Track the active button
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

	const handleButtonClick = (buttonName) => {
		setActiveButton(buttonName); // Set the active button
	};

	return (
		<div className="p-8">
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
						].map((buttonName) => (
							<li key={buttonName} className="list-none">
								<button
									onClick={() => handleButtonClick(buttonName)}
									className={`flex justify-center items-center w-[100px] h-[50px] text-[15px] rounded-full ${
										activeButton === buttonName
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
			<div className="grid grid-cols-3 gap-6 mt-[50px]">
				{images.map((image) => (
					<div
						key={image.name}
						className="bg-white rounded-2xl shadow-lg overflow-hidden"
					>
						<img
							src={image.image_link}
							alt={image.name}
							className="w-full h-48 object-cover"
						/>
						<div className="p-4">
							<h1 className="text-xl font-bold">{image.name}</h1>
							<p className="text-gray-600">
								{image.city}, {image.country}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExploreMore;
