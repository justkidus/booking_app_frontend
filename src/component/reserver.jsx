// import React, { useContext, useState } from 'react';
// import useFetch from '../hooks/useFetch';
// import axios from 'axios';
// import { SearchContext } from '../context/searchContext';
// import { useNavigate } from 'react-router-dom';
// import BedIcon from '@mui/icons-material/Bed';
// const Reserve = ({ setOpen, hotelId }) => {
// 	const navigate = useNavigate();
// 	const [selectedRooms, setSelectedRooms] = useState([]);
// 	const { data, loading, error } = useFetch(
// 		`http://localhost:5000/api/hotel/room/${hotelId}`
// 		// `https://bookingappbackend-production.up.railway.app/api/hotel/room/${hotelId}`
// 	);
// 	const { dates } = useContext(SearchContext);

// 	const getDatesInRange = (startDate, endDate) => {
// 		const start = new Date(startDate);
// 		const end = new Date(endDate);
// 		const date = new Date(start.getTime());
// 		let list = [];

// 		while (date <= end) {
// 			list.push(new Date(date).getTime());
// 			date.setDate(date.getDate() + 1);
// 		}
// 		return list;
// 	};
// 	const All_Dates = getDatesInRange(dates[0].startDate, dates[0].endDate);

// 	const isAvailable = (roomNumber) => {
// 		const isFound = roomNumber.unavailableDates.some((date) =>
// 			All_Dates.includes(new Date(date).getTime())
// 		);
// 		return !isFound;
// 	};

// 	const handleSelect = (e) => {
// 		const checked = e.target.checked;
// 		const value = e.target.value;
// 		setSelectedRooms(
// 			checked
// 				? [...selectedRooms, value]
// 				: selectedRooms.filter((item) => item !== value)
// 		);
// 	};
// 	const handleClick = async () => {
// 		try {
// 			await Promise.all(
// 				selectedRooms.map((roomId) => {
// 					const res = axios.put(
// 						`https://bookingappbackend-production.up.railway.app/api/room/availability/${roomId}`,
// 						{
// 							dates: All_Dates,
// 						}
// 					);
// 					return res.data;
// 				})
// 			);
// 			setOpen(false);
// 			alert('Room reserved Successfully!!!');
// 			navigate('');
// 		} catch (err) {
// 			console.log('Error in room availability :', err);
// 			alert('Failed to reserve rooms. Please try again.');
// 		}
// 	};
// 	return (
// 		<div className="reserve" style={{ color: 'black' }}>
// 			<div className="rContainer">
// 				<BedIcon className="rClose" onClick={() => setOpen(false)} />
// 				<span>Select your rooms</span>
// 				{data.map((item) => (
// 					<div className="tItem" key={item._id}>
// 						<div className="rItemInfo">
// 							<div className="rTitle">{item.title}</div>
// 							<div className="rDesc">{item.desc}</div>
// 							<div className="rMax">
// 								Max People allowed : <b>{item.maxPeople}</b>
// 							</div>
// 							<div className="rPrice">{item.price}</div>
// 						</div>
// 						<div className="rSelectRooms">
// 							<div className="room">
// 								{item.roomNumbers.map((roomNumber) => (
// 									<div className="room" key={roomNumber._id}>
// 										<label>{roomNumber.number}</label>
// 										<input
// 											type="checkbox"
// 											value={roomNumber._id}
// 											onChange={handleSelect}
// 											disabled={!isAvailable(roomNumber)}
// 										/>
// 									</div>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 				<button onClick={handleClick} className="rButton">
// 					Reserve Now
// 				</button>
// 			</div>
// 		</div>
// 	);
// };
// export default Reserve;

//////////////////////////////////////

import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/searchContext';
import { useNavigate } from 'react-router-dom';
import BedIcon from '@mui/icons-material/Bed';
import axios from 'axios';
import useFetch from '../hooks/useFetch';
const Reserve = ({ setOpen, hotelId }) => {
	const navigate = useNavigate();
	const [selectedRooms, setSelectedRooms] = useState([]);
	const { data, loading, error } = useFetch(
		// `http://localhost:5000/api/hotel/room/${hotelId}`
		`https://bookingappbackend-production.up.railway.app/api/hotel/room/${hotelId}`
	);
	const { dates } = useContext(SearchContext);

	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		const date = new Date(start.getTime());
		let list = [];

		while (date <= end) {
			list.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		return list;
	};
	const All_Dates = getDatesInRange(dates[0].startDate, dates[0].endDate);

	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			All_Dates.includes(new Date(date).getTime())
		);
		return !isFound;
	};

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};

	const handleClick = async () => {
		try {
			await Promise.all(
				selectedRooms.map((roomId) => {
					const res = axios.put(
						`https://bookingappbackend-production.up.railway.app/api/room/availability/${roomId}`,
						{
							dates: All_Dates,
						}
					);
					return res.data;
				})
			);
			setOpen(false);
			alert('Room reserved Successfully!!!');
			navigate('');
		} catch (err) {
			console.log('Error in room availability:', err);
			alert('Failed to reserve rooms. Please try again.');
		}
	};

	if (loading) {
		return <p>Loading rooms...</p>; // Loading state
	}

	if (error) {
		return <p>Error loading rooms. Please try again later.</p>; // Error state
	}

	return (
		<div className="reserve" style={{ color: 'black' }}>
			<div className="rContainer">
				<BedIcon className="rClose" onClick={() => setOpen(false)} />
				<span>Select your rooms</span>

				{/* Render the rooms only if data is available */}
				{data && Array.isArray(data) ? (
					data.map((item) => (
						<div className="tItem" key={item._id}>
							<div className="rItemInfo">
								<div className="rTitle">{item.title}</div>
								<div className="rDesc">{item.desc}</div>
								<div className="rMax">
									Max People allowed: <b>{item.maxPeople}</b>
								</div>
								<div className="rPrice">{item.price}</div>
							</div>
							<div className="rSelectRooms">
								<div className="room">
									{item.roomNumbers.map((roomNumber) => (
										<div className="room" key={roomNumber._id}>
											<label>{roomNumber.number}</label>
											<input
												type="checkbox"
												value={roomNumber._id}
												onChange={handleSelect}
												disabled={!isAvailable(roomNumber)}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					))
				) : (
					<p>No rooms available.</p> // Handle case where no rooms are available
				)}

				<button onClick={handleClick} className="rButton">
					Reserve Now
				</button>
			</div>
		</div>
	);
};

export default Reserve;
