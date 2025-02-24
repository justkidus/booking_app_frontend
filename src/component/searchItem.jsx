import React, { useState, useEffect } from 'react';
// import {
// 	faBed,
// 	faCalendarDays,
// 	faCar,
// 	faPerson,
// 	faPlane,
// 	faTaxi,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeIcon component
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
const SearchItem = () => {
	const [openDate, setOpenDate] = useState(false);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
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

				<div className="grid grid-cols-4 mt-[20px] grid-rows-1 absolute gap-4">
					<li className="list-none leading-7 w-[150px]">
						Destination <br />
						<span className="ml-[10px]">
							{/* <FontAwesomeIcon className="headerIcon" /> */}
							<input
								type="text"
								placeholder="Bali,Indonisia"
								className="bg-[whitsmoke] w-[140px]"
							/>
							{/* Bali,Indonisia */}
						</span>
					</li>

					<li>
						<div className="flex items-center gap-[10px]">
							{/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}
							<span
								onClick={() => setOpenDate(!openDate)}
								className="text-[lightGray] cursor-pointer"
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
						</div>
						{/* <div className="headerSearchItem">
							<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
							<span
								onClick={() => setOpenDate(!openDate)}
								className="headerSearchText"
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
									className="date"
									minDate={new Date()}
								/>
							)}
						</div> */}
					</li>
					<li className="list-none leading-7  w-[150px]">
						Room & Guests
						<br />
						<span className="ml-[10px]">
							<input
								type="text"
								placeholder="1 Room ,2 Guests"
								className="bg:[whitsmoke] w-[140px] placeholder-ml-[10px]"
							/>
							{/* 1 Room ,2 Guests */}
						</span>
					</li>
					<button className="bg-black h-[40px] w-[140px] text-white absolute left-[107vh] top-[3vh]">
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
