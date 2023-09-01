import './App.css';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import categoriesApi from './api/categoryApi';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
function App() {
	useEffect(() => {
		const params = {
			_limit: 2,
		};

		const fetchCategory = async () => {
			await categoriesApi.getAll(params);
		};
		fetchCategory();
	}, []);

	return (
		<div className="App">
			Hello mother fuckers!
			<br />
			<Link to="/todoList">TodoList</Link>
			<br></br>
			<Link to="/albumList">AlbumList</Link>
			<Routes>
				<Route
					path="/todoList"
					element={<TodoFeature />}
				/>
				<Route
					path="/albumList"
					element={<AlbumFeature />}
				/>
			</Routes>
		</div>
	);
}

export default App;
