import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Booking from './pages/bookingpage.jsx';
import SideBar from './pages/sidebarSearch.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header.jsx';
import { SearchContextProvider } from './context/searchContext.jsx';
import Login from './pages/login.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import signUp from './pages/signUp.jsx';
import SignUp from './pages/signUp.jsx';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthContextProvider>
			<SearchContextProvider>
				<Router>
					<div className="bg-white mr-[40px] ml-[40px] mt-[30px] mb-[30px] scroll-mt-16">
						<Header />
					</div>

					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/book/:id" element={<Booking />} />
						<Route path="/search" element={<SideBar />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						{/* <Route path="/ticket" element={<TicketPage />} /> */}
					</Routes>
				</Router>
			</SearchContextProvider>
		</AuthContextProvider>
	</StrictMode>
);
