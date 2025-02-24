import React from 'react';

const LandingPage = () => {
	return (
		<div className="relative ">
			<div className="absolute top-30 left-60 flex justify-center align-center">
				<h1 className="white text-5xl text-white font-bold opacity-80 leading-16">
					Explore the whole world <br />
					<span className="ml-[45px]">and enjoy its beauty</span>
				</h1>
			</div>
			<p className="mr absolute top-70 left-75 text-white font-bold">
				Find and write about youe experience around the world
			</p>

			<img
				src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
				alt="Beach resort with sunbeds and umbrellas"
				className="object-cover h-[80vh] w-[97%] rounded-3xl"
			/>
		</div>
	);
};

export default LandingPage;
