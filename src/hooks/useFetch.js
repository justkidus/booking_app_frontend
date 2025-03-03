import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log('Fecthing data from : ', url);
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(url);
				setData(res.data);
				console.log(`API Response :`, res.data);
			} catch (error) {
				setError(true);
				console.error('Error fetcing data :', error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);

	const reFetch = async () => {
		setLoading(true);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			setError(true);
			console.error('Error refreshing data :' + error);
		}
		setLoading(false);
	};
	return { data, loading, error, reFetch };
};
export default useFetch;
