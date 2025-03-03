import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const PopularPlaces = () => {
	const images = [
		{
			type: 'hotel',
			url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
			place: 'SC. Mindanou',
			country: 'Tokyo',
			capital: 'Japan',
		},
		{
			type: 'resort',
			url: ' https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
			place: 'Entoto',
			country: 'Ethiopia',
			capital: 'Addis Ababa',
		},
		{
			type: 'beach',
			url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
			place: 'Tousand island',
			country: 'Italy',
			capital: 'Venice',
		},
		{
			type: 'cabin',
			url: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1',
			place: 'Basilika Santo',
			country: 'Indonisia',
			capital: 'Java',
		},
	];
	return (
		<div>
			<div className="flex justify-between">
				<div className="leading-6">
					<h1 className="text-4xl font-bold"> Popular Places</h1>
					<p>Let's enjoy the heaven on earth</p>
				</div>
				<div className="mr-[30px]">
					<p className="whitespace-normal text-[17px]">
						Many places are very famous,beautiful,clean and will give a very
						<br />
						deep impressions to visitors and will make them come back
					</p>
				</div>
			</div>
			<br />

			<div className="grid grid-cols-4">
				{images.map((image) => (
					<div className="" key={image.type}>
						<img
							src={image.url}
							alt={image.type}
							className="w-[260px] h-[270px] rounded-2xl"
						/>
						<h1 className="font-bold text-[18px]">{image.place}</h1>
						<p className="flex gap-[5px]">
							<LocationOnIcon />
							{image.capital}, <span>{image.country}</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularPlaces;
