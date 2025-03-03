import React, { useState, useEffect } from 'react';

const Booking = () => {
	const images = [
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
		},
	];
	const [slideShow, setSlideShow] = useState(0);
	const [open, setOpen] = useState(true);
	const handleSlide = () => {
		// i use this to see the range will not pass the length and the function touch's every number in the range
		// like 1%6=1,2%6=2,3%6=3,4%6=4,5%6=5,6%6=0
		setSlideShow((prev) => (prev + 1) % images.length);
	};
	const handleOpen = () => {
		setOpen(false);
	};
	return (
		<>
			{open ? (
				<div>
					<h1>Hotel Name</h1>
					<h3>Location</h3>
					<p>Excellent location ${500} from center</p>
					<p>
						Book a stay over ${2000} at this property and get a free airport
						taxi
					</p>
					<div className="grid grid-cols-3 m-[65px]">
						{images.map((image, i) => (
							<div className="flex justify-center items-center" key={i}>
								<div>
									<button onClick={() => handleOpen()}>
										<img
											src={image.src}
											alt="house images"
											className="w-[350px] h-[250px]"
										/>
									</button>
								</div>
							</div>
						))}

						<h1>hotel.title</h1>
						<h2>hotel.description</h2>

						<div>
							<h1>Perfect for a 1-night stay!</h1>
							<p>
								Located in the real heart of krakow,this property has an
								excellent location sort of 9.8
							</p>
							<h1>Price(1 nights)</h1>
							<button>Reserve or Book Now !</button>
						</div>
					</div>
				</div>
			) : (
				<div>
					<img src={images[slideShow].src} alt="bathroom" />
					{/* if the code uses handleSlide() this takes it to an infinite loop */}
					<button onClick={() => handleSlide()}>forward</button>
					<button>backward</button>
				</div>
			)}
		</>
	);
};
export default Booking;
