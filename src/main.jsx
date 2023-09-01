import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ErrorPage from './components/NotFound/index.jsx';
// import TodoFeature from './features/Todo/index.jsx';
// import AlbumFeature from './features/Album/index.jsx';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 		children: [
// 			{
// 				path: 'todoList',
// 				element: <TodoFeature />,
// 			},
// 			{
// 				path: 'albumList',
// 				element: <AlbumFeature />,
// 			},
// 		],
// 	},
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <RouterProvider router={router} /> */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
