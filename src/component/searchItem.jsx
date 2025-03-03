import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BoyIcon from '@mui/icons-material/Boy';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';
import { useContext } from 'react';
// import { AuthContext } from '../context/authContext';

const SearchItem = ({ type }) => {
	const [destination, setDestination] = useState('');
	const [openDate, setOpenDate] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const navigate = useNavigate();
	// const { user } = useContext(AuthContext);

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	const { dispatch } = useContext(SearchContext);

	// const handleSearch = () => {
	// 	dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
	// 	console.log('search dispatched :', { destination, dates, options });
	// 	navigate('/search', { state: { destination, dates, options } });
	// };

	const handleSearch = () => {
		console.log('Before dispatch:', { destination, dates, options }); // Debugging
		dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
		console.log('After dispatch:', { destination, dates, options }); // Debugging
		navigate('/search', { state: { destination, dates, options } });
	};
	return (
		<div className="flex absolute bg-white w-[80%] h-[180px] rounded-4xl left-[115px] bottom-[-45px]">
			<div className="ml-[50px] mt-[10px]">
				<div className="flex">
					<div className="grid absolute">
						<ul className="grid grid-cols-4 gap-5">
							<li className="whitespace-nowrap">Hosteiry</li>
							<li className="whitespace-nowrap">Flight</li>
							<li className="whitespace-nowrap">Bus & Shuttle</li>
							<li className="whitespace-nowrap">Cars</li>
						</ul>
					</div>
					<div className="ml-[720px] whitespace-nowrap">Last Searching</div>
				</div>
				<br />
				<hr className="w-[100%]" />
				{type !== 'list' && (
					<>
						<div className="grid grid-cols-4 mt-[20px] grid-rows-1 absolute gap-2">
							<li className="list-none leading-7 w-[150px]">
								Destination <br />
								<span className="flex gap-[3px]">
									<LocationOnIcon className="whitespace-normal" />
									<input
										type="text"
										placeholder="Bali,Indonisia"
										className="bg-[whitsmoke] w-[140px]"
										onChange={(e) => setDestination(e.target.value)}
									/>
								</span>
							</li>
							<li className="list-none leading-7 w-[150px] flex items-center gap-[10px]">
								{/* <div className="flex items-center gap-[10px]"> */}
								<CalendarMonthIcon />
								<span
									onClick={() => setOpenDate(!openDate)}
									className="text-[gray] cursor-pointer"
								>{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
									dates[0].endDate,
									'MM/dd/yyyy'
								)}`}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDates([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={dates}
										className="absolute top-[50px] z-2"
										minDate={new Date()}
									/>
								)}
							</li>

							<li className="flex items-center gap-[10px]">
								<BoyIcon />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="cursor-pointer w-[200px] text-[18px]"
								>{`${options.adult} adult - ${options.room} room`}</span>
								{openOptions && (
									<div className="z-2 absolute top-[50px] bg-white text-[gray] rounded-[5px] shadow-[0px_0px_10px_-5px_rgba(0,0,0,0.4)]">
										<div className="w-[200px] flex justify-between m-[10px]">
											<span className="">Adult</span>
											<div className="flex items-center gap-[10px] text-[12px] text-black">
												<button
													disabled={options.adult <= 1}
													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
													onClick={() => handleOption('adult', 'd')}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.adult}
												</span>
												<button
													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
													onClick={() => handleOption('adult', 'i')}
												>
													+
												</button>
											</div>
										</div>
										<div className="w-[200px] flex justify-between m-[10px]">
											<span className="optionText">Children</span>
											<div className="flex items-center gap-[10px] text-[12px] text-black">
												<button
													disabled={options.children <= 0}
													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
													onClick={() => handleOption('children', 'd')}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.children}
												</span>
												<button
													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
													onClick={() => handleOption('children', 'i')}
												>
													+
												</button>
											</div>
										</div>
										<div className="w-[200px] flex justify-between m-[10px]">
											<span className="optionText">Room</span>
											<div className="flex items-center gap-[10px] text-[12px] text-black">
												<button
													disabled={options.room <= 1}
													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
													onClick={() => handleOption('room', 'd')}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.room}
												</span>
												<button
													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
													onClick={() => handleOption('room', 'i')}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</li>

							<button
								className="bg-black h-[40px] w-[140px] text-white absolute left-[107vh] top-[3vh]"
								onClick={handleSearch}
							>
								Search
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default SearchItem;

///////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { DateRange } from 'react-date-range';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { format } from 'date-fns';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import BoyIcon from '@mui/icons-material/Boy';
// import { useNavigate } from 'react-router-dom';
// import { SearchContext } from '../context/searchContext';
// import { useContext } from 'react';

// const SearchItem = ({ type }) => {
// 	const [destination, setDestination] = useState('');
// 	const [openDate, setOpenDate] = useState(false);
// 	const [openOptions, setOpenOptions] = useState(false);
// 	const [options, setOptions] = useState({
// 		adult: 1,
// 		children: 0,
// 		room: 1,
// 	});
// 	const [dates, setDates] = useState([
// 		{
// 			startDate: new Date(),
// 			endDate: new Date(),
// 			key: 'selection',
// 		},
// 	]);
// 	const navigate = useNavigate();
// 	const { dispatch, searchHotels } = useContext(SearchContext);

// 	const handleOption = (name, operation) => {
// 		setOptions((prev) => {
// 			return {
// 				...prev,
// 				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
// 			};
// 		});
// 	};

// 	const handleSearch = () => {
// 		console.log('Before dispatch:', { destination, dates, options }); // Debugging
// 		searchHotels(destination); // Filter hotels based on destination
// 		dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
// 		console.log('After dispatch:', { destination, dates, options }); // Debugging
// 		navigate('/search', { state: { destination, dates, options } });
// 	};

// 	return (
// 		<div className="flex absolute bg-white w-[80%] h-[180px] rounded-4xl left-[115px] bottom-[-45px]">
// 			<div className="ml-[50px] mt-[10px]">
// 				<div className="flex">
// 					<div className="grid absolute">
// 						<ul className="grid grid-cols-4 gap-5">
// 							<li className="whitespace-nowrap">Hosteiry</li>
// 							<li className="whitespace-nowrap">Flight</li>
// 							<li className="whitespace-nowrap">Bus & Shuttle</li>
// 							<li className="whitespace-nowrap">Cars</li>
// 						</ul>
// 					</div>
// 					<div className="ml-[720px] whitespace-nowrap">Last Searching</div>
// 				</div>
// 				<br />
// 				<hr className="w-[100%]" />
// 				{type !== 'list' && (
// 					<>
// 						<div className="grid grid-cols-4 mt-[20px] grid-rows-1 absolute gap-2">
// 							<li className="list-none leading-7 w-[150px]">
// 								Destination <br />
// 								<span className="flex gap-[3px]">
// 									<LocationOnIcon className="whitespace-normal" />
// 									<input
// 										type="text"
// 										placeholder="Bali,Indonisia"
// 										className="bg-[whitsmoke] w-[140px]"
// 										value={destination}
// 										onChange={(e) => setDestination(e.target.value)}
// 										onBlur={() => searchHotels(destination)} // Filter hotels when input loses focus
// 									/>
// 								</span>
// 							</li>
// 							<li className="list-none leading-7 w-[150px] flex items-center gap-[10px]">
// 								<CalendarMonthIcon />
// 								<span
// 									onClick={() => setOpenDate(!openDate)}
// 									className="text-[gray] cursor-pointer"
// 								>{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
// 									dates[0].endDate,
// 									'MM/dd/yyyy'
// 								)}`}</span>
// 								{openDate && (
// 									<DateRange
// 										editableDateInputs={true}
// 										onChange={(item) => setDates([item.selection])}
// 										moveRangeOnFirstSelection={false}
// 										ranges={dates}
// 										className="absolute top-[50px] z-2"
// 										minDate={new Date()}
// 									/>
// 								)}
// 							</li>

// 							<li className="flex items-center gap-[10px]">
// 								<BoyIcon />
// 								<span
// 									onClick={() => setOpenOptions(!openOptions)}
// 									className="cursor-pointer w-[200px] text-[18px]"
// 								>{`${options.adult} adult - ${options.room} room`}</span>
// 								{openOptions && (
// 									<div className="z-2 absolute top-[50px] bg-white text-[gray] rounded-[5px] shadow-[0px_0px_10px_-5px_rgba(0,0,0,0.4)]">
// 										<div className="w-[200px] flex justify-between m-[10px]">
// 											<span className="">Adult</span>
// 											<div className="flex items-center gap-[10px] text-[12px] text-black">
// 												<button
// 													disabled={options.adult <= 1}
// 													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
// 													onClick={() => handleOption('adult', 'd')}
// 												>
// 													-
// 												</button>
// 												<span className="optionCounterNumber">
// 													{options.adult}
// 												</span>
// 												<button
// 													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
// 													onClick={() => handleOption('adult', 'i')}
// 												>
// 													+
// 												</button>
// 											</div>
// 										</div>
// 										<div className="w-[200px] flex justify-between m-[10px]">
// 											<span className="optionText">Children</span>
// 											<div className="flex items-center gap-[10px] text-[12px] text-black">
// 												<button
// 													disabled={options.children <= 0}
// 													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
// 													onClick={() => handleOption('children', 'd')}
// 												>
// 													-
// 												</button>
// 												<span className="optionCounterNumber">
// 													{options.children}
// 												</span>
// 												<button
// 													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
// 													onClick={() => handleOption('children', 'i')}
// 												>
// 													+
// 												</button>
// 											</div>
// 										</div>
// 										<div className="w-[200px] flex justify-between m-[10px]">
// 											<span className="optionText">Room</span>
// 											<div className="flex items-center gap-[10px] text-[12px] text-black">
// 												<button
// 													disabled={options.room <= 1}
// 													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
// 													onClick={() => handleOption('room', 'd')}
// 												>
// 													-
// 												</button>
// 												<span className="optionCounterNumber">
// 													{options.room}
// 												</span>
// 												<button
// 													className="w-[30px] h-[30px] border-[1px] cursor-pointer bg-white"
// 													onClick={() => handleOption('room', 'i')}
// 												>
// 													+
// 												</button>
// 											</div>
// 										</div>
// 									</div>
// 								)}
// 							</li>

// 							<button
// 								className="bg-black h-[40px] w-[140px] text-white absolute left-[107vh] top-[3vh]"
// 								onClick={handleSearch}
// 							>
// 								Search
// 							</button>
// 						</div>
// 					</>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

// export default SearchItem;
