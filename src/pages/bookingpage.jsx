// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { SearchContext } from '../context/searchContext';
// import { useContext } from 'react';
// import { AuthContext } from '../context/authContext';
// import Reserve from '../component/reserver';
// import { useParams } from 'react-router-dom';

// import axios from 'axios';
// const Booking = () => {
// 	const navigate = useNavigate();
// 	const location = useLocation();
// 	// console.log(location);
// 	const { id } = useParams();
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState(false);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				setLoading(true);
// 				const res = await axios.get(
// 					`http://localhost:5000/api/hotel/getahotel/${id}`
// 				);
// 				setData(res.data);
// 				console.log('API Response:', res.data);
// 			} catch (err) {
// 				setError(true);
// 				console.error('Error fetching data:', err);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		fetchData();
// 	}, [id]);
// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>Error occurred while fetching data.</p>;

// 	// const { data, reFetch, loading, error } = useFetch(
// 	// 	`http://localhost:5000/api/hotel/getahotel/${id}`
// 	// )
// 	// console.log(
// 	// 	'Fetching from API:',
// 	// 	`http://localhost:5000/api/hotel/getahotel/${id}`
// 	// );
// 	console.log('Fetched data:', data);
// 	// `https://bookingappbackend-production.up.railway.app/api/hotel/getahotel/${id}`

// 	const { user } = useContext(AuthContext);
// 	const { dates, options } = useContext(SearchContext);
// 	const MILLESECONDS_PER_DAY = 1000 * 60 * 60 * 24;

// 	function dayDifference(date1, date2) {
// 		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
// 		const diffDays = Math.ceil(timeDiff / MILLESECONDS_PER_DAY);
// 		return diffDays;
// 	}
// 	const days = dayDifference(dates[0].endDate, dates[0].startDate);
// 	const images = [
// 		{
// 			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
// 		},
// 		{
// 			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
// 		},
// 		{
// 			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
// 		},
// 		{
// 			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
// 		},
// 		{
// 			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
// 		},
// 		{
// 			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
// 		},
// 	];
// 	const [slideShow, setSlideShow] = useState(0);
// 	const [open, setOpen] = useState(true);
// 	const [openModel, setOpenModel] = useState(false);
// 	const handleSlide = () => {
// 		// i use this to see the range will not pass the length and the function touch's every number in the range
// 		// like 1%6=1,2%6=2,3%6=3,4%6=4,5%6=5,6%6=0
// 		setSlideShow((prev) => (prev + 1) % images.length);
// 	};
// 	const handleOpen = () => {
// 		setOpen(false);
// 	};
// 	const handleClick = () => {
// 		if (user) {
// 			setOpenModel(true);
// 		} else {
// 			navigate('/login');
// 		}
// 	};
// 	return (
// 		<>
// 			<div>
// 				{open ? (
// 					<div>
// 						<h1>{data.name}</h1>
// 						<h3>{data.address}</h3>
// 						<p>Excellent location ${data.distance} from center</p>
// 						<p>
// 							Book a stay over ${data.cheapestPrice} at this property and get a
// 							free airport taxi
// 						</p>
// 						<div className="grid grid-cols-3 m-[65px]">
// 							{images.map((image, i) => (
// 								<div className="flex justify-center items-center" key={i}>
// 									<div>
// 										<button onClick={() => handleOpen()}>
// 											<img
// 												src={image.src}
// 												alt="house images"
// 												className="w-[350px] h-[250px]"
// 											/>
// 										</button>
// 									</div>
// 								</div>
// 							))}

// 							<h1>{data.title}</h1>
// 							<h2>{data.description}</h2>

// 							<div>
// 								<h1>Perfect for a {days}-night stay!</h1>
// 								<p>
// 									Located in the real heart of krakow,this property has an
// 									excellent location sort of 9.8
// 								</p>
// 								{/* <h1>Price(1 nights)</h1> */}
// 								<h2>
// 									<b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
// 									nights)
// 								</h2>
// 								<button
// 									onClick={handleClick}
// 									className="bg-blue-500 p-[10px] text-white"
// 								>
// 									Reserve or Book Now !
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				) : (
// 					<div>
// 						<img src={images[slideShow].src} alt="bathroom" />
// 						{/* if the code uses handleSlide() this takes it to an infinite loop */}
// 						<button onClick={() => handleSlide()}>forward</button>
// 						<button>backward</button>
// 					</div>
// 				)}
// 				{openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
// 			</div>
// 		</>
// 	);
// };
// export default Booking;

///////////////////////////////

import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';
import { AuthContext } from '../context/authContext';
import Reserve from '../component/reserver';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { id } = useParams();

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { user } = useContext(AuthContext);
	const { dates, options } = useContext(SearchContext);

	const [slideShow, setSlideShow] = useState(0);
	const [open, setOpen] = useState(true);
	const [openModel, setOpenModel] = useState(false);

	// Fetch hotel data
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await axios.get(
					// `http://localhost:5000/api/hotel/getahotel/${id}`
					`https://bookingappbackend-production.up.railway.app/api/hotel/getahotel/${id}`
				);
				setData(res.data);
				console.log('API Response:', res.data);
			} catch (err) {
				setError(true);
				console.error('Error fetching data:', err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error occurred while fetching data.</p>;

	// Calculate the number of days for the stay
	const MILLESECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.ceil(timeDiff / MILLESECONDS_PER_DAY);
		return diffDays;
	}

	const days = dayDifference(dates[0].endDate, dates[0].startDate);

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

	// Handle the slideshow navigation
	const handleSlide = () => {
		setSlideShow((prev) => (prev + 1) % images.length);
	};

	// Toggle modal state
	const handleClick = () => {
		if (user) {
			setOpenModel(true);
		} else {
			navigate('/login');
		}
	};

	return (
		<div>
			{/* Display hotel data */}
			{open ? (
				<div>
					<h1>{data.name}</h1>
					<h3>{data.address}</h3>
					<p>Excellent location {data.distance} from center</p>
					<p>
						Book a stay over ${data.cheapestPrice} at this property and get a
						free airport taxi
					</p>
					<div className="grid grid-cols-3 m-[65px]">
						{images.map((image, i) => (
							<div className="flex justify-center items-center" key={i}>
								<button onClick={() => setOpen(false)}>
									<img
										src={image.src}
										alt="hotel images"
										className="w-[350px] h-[250px]"
									/>
								</button>
							</div>
						))}
						<h1>{data.title}</h1>
						<h2>{data.description}</h2>

						<div>
							<h1>Perfect for a {days}-night stay!</h1>
							<h2>
								<b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
								nights)
							</h2>
							<button
								onClick={handleClick}
								className="bg-blue-500 p-[10px] text-white"
							>
								Reserve or Book Now !
							</button>
						</div>
					</div>
				</div>
			) : (
				<div>
					<img src={images[slideShow].src} alt="bathroom" />
					<button onClick={handleSlide}>Next</button>
				</div>
			)}
			{openModel && <Reserve setOpen={setOpenModel} hotelId={id} />}
		</div>
	);
};

export default Booking;
