import React, { useState } from 'react';

const LandingPage = () => {
	const [width, setWidth] = useState();
	return (
		<>
			<div className="relative flex flex-col items-center justify-center h-[80vh]">
				{/* Image - Only visible on md and larger */}
				<img
					src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
					alt="Beach resort with sunbeds and umbrellas"
					className="h-[80vh] w-[95%] rounded-3xl absolute top-0 hidden md:block"
				/>

				{/* Text - Black by default, White on large screens */}
				<div className="text-center px-4 md:max-top-2xl max-sm:text-top">
					<h1 className="text-3xl text-black font-bold opacity-80 sm:text-5xl leading-tight lg:text-white relative">
						Explore the whole world <br />
						<span className="sm:ml-[45px]">and enjoy its beauty</span>
					</h1>
					<br />
					<p className="text-black font-bold text-lg sm:text-xl lg:text-white opacity-80">
						Find and write about your experience around the world
					</p>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
