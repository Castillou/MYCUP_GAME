import { createBrowserRouter } from 'react-router-dom';
import Layout from '../compnents/Layout';
import HomePage from '../pages/Home';
import ListPage from '../pages/List';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/list',
				element: <ListPage />,
			},
		],
	},
]);

export default router;
