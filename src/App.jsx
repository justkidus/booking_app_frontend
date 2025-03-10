import { useState, useEffect } from 'react';
import Header from './component/header';
import LandingPage from './component/landingPage';
import SearchItem from './component/searchItem';
import PopularPlaces from './component/PopularPlaces';
import ExploreMore from './component/ExploreMore';
import TicketPage from './pages/ticket.jsx';
import { ToastContainer } from 'react-toastify';
// import { useLocation } from 'react-router-dom';
function App() {
	// const location = useLocation();

	// useEffect(() => {
	// 	// Check if there's a hash in the URL
	// 	if (location.hash) {
	// 		// Wait for the component to render, then scroll to the element
	// 		setTimeout(() => {
	// 			const element = document.querySelector(location.hash);
	// 			if (element) {
	// 				element.scrollIntoView({ behavior: 'smooth' });
	// 			}
	// 		}, 0);
	// 	}
	// }, [location]);
	return (
		<>
			<div className="bg-white mr-[40px] ml-[40px] scroll-mt-16">
				<section className="mt-[10px]">
					<LandingPage />
				</section>
				<section>
					<SearchItem />
				</section>
				<section className="mt-[25vh]">
					<PopularPlaces />
				</section>
				<section className="mt-[50px]">
					<ExploreMore />
				</section>
				<section className="mt-[50px]">
					<TicketPage />
				</section>

				<ToastContainer />
			</div>
		</>
	);
}

export default App;
