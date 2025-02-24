import { useState } from 'react';
import Header from './component/header';
import LandingPage from './component/landingPage';
import SearchItem from './component/searchItem';
import PopularPlaces from './component/PopularPlaces';
import ExploreMore from './component/ExploreMore';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="bg-white mr-[40px] ml-[40px] mt-[40px]">
				<Header />
				<section className="mt-[40px] ml-[30px]">
					<LandingPage />
				</section>
				<section>
					<SearchItem />
				</section>
				<section className="mt-[100px]">
					<PopularPlaces />
				</section>
				<section className="mt-[50px]">
					<ExploreMore />
				</section>
			</div>
		</>
	);
}

export default App;
