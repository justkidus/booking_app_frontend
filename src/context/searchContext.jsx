// import { createContext, useReducer, useEffect } from 'react';

// const INITIAL_STATE = {
// 	destination: '',
// 	dates: [{ startDate: new Date(), endDate: new Date() }],
// 	options: {
// 		adult: 1,
// 		children: 0,
// 		room: 1,
// 	},
// 	hotels: [], // List of all hotels
// 	filteredHotels: [], // List of filtered hotels
// 	searchTerm: '', // Current search input
// 	isLoading: false, // Loading state for API calls
// 	error: null, // Error state for API calls
// };

// export const SearchContext = createContext(INITIAL_STATE);

// const SearchReducer = (state, action) => {
// 	switch (action.type) {
// 		case 'NEW_SEARCH':
// 			return {
// 				...state,
// 				destination: action.payload.destination,
// 				dates: action.payload.dates,
// 				options: action.payload.options,
// 			};
// 		case 'RESET_SEARCH':
// 			return INITIAL_STATE;
// 		case 'SET_HOTELS':
// 			return {
// 				...state,
// 				hotels: action.payload,
// 				filteredHotels: action.payload,
// 				isLoading: false,
// 				error: null,
// 			};
// 		case 'SEARCH_HOTELS':
// 			const filteredHotels = state.hotels.filter(
// 				(hotel) =>
// 					hotel.city.toLowerCase().includes(action.payload.toLowerCase()) // Filter by city
// 			);
// 			console.log('Filtered Hotels:', filteredHotels); // Debugging
// 			return {
// 				...state,
// 				searchTerm: action.payload,
// 				filteredHotels,
// 			};
// 		case 'SET_LOADING':
// 			return {
// 				...state,
// 				isLoading: action.payload,
// 			};
// 		case 'SET_ERROR':
// 			return {
// 				...state,
// 				error: action.payload,
// 				isLoading: false,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const SearchContextProvider = ({ children }) => {
// 	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

// 	const setHotels = (hotels) => {
// 		dispatch({ type: 'SET_HOTELS', payload: hotels });
// 	};

// 	const searchHotels = (searchTerm) => {
// 		dispatch({ type: 'SEARCH_HOTELS', payload: searchTerm });
// 	};

// 	const fetchHotels = async () => {
// 		try {
// 			dispatch({ type: 'SET_LOADING', payload: true });
// 			const response = await fetch('https://api.example.com/hotels');
// 			if (!response.ok) {
// 				throw new Error('Failed to fetch hotels');
// 			}
// 			const data = await response.json();
// 			setHotels(data);
// 		} catch (error) {
// 			dispatch({ type: 'SET_ERROR', payload: error.message });
// 		} finally {
// 			dispatch({ type: 'SET_LOADING', payload: false });
// 		}
// 	};

// 	// Fetch hotels on component mount
// 	useEffect(() => {
// 		fetchHotels();
// 	}, []); // Empty dependency array ensures this runs only once on mount

// 	return (
// 		<SearchContext.Provider
// 			value={{ ...state, dispatch, setHotels, searchHotels }}
// 		>
// 			{children}
// 		</SearchContext.Provider>
// 	);
// };

///////////////////////////////////////////////
import { createContext, useReducer, useMemo } from 'react';
const INITIAL_STATE = {
	city: undefined,
	dates: [{ startDate: new Date(), endDate: new Date() }],
	options: {
		adult: undefined,
		children: undefined,
		room: undefined,
	},
};
export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
	switch (action.type) {
		case 'NEW_SEARCH':
			return action.payload;
		case 'RESET_SEARCH':
			return INITIAL_STATE;
		default:
			return state;
	}
};

export const SearchContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
	return (
		<SearchContext.Provider
			value={{
				city: state.city,
				dates: state.dates,
				options: state.options,
				dispatch,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};
