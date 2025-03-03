import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Booking from './pages/bookingpage.jsx';
import SideBar from './pages/sidebarSearch.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header.jsx';
import { SearchContextProvider } from './context/searchContext.jsx';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<SearchContextProvider>
			<Router>
				<div className="bg-white mr-[40px] ml-[40px] mt-[40px] scroll-mt-16">
					<Header />
				</div>

				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/book" element={<Booking />} />
					<Route path="/search" element={<SideBar />} />
					{/* <Route path="/ticket" element={<TicketPage />} /> */}
				</Routes>
			</Router>
		</SearchContextProvider>
	</StrictMode>
);
