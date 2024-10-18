import { createBrowserRouter } from 'react-router-dom';
import Layout from '../compnents/Layout';
import HomePage from '../pages/Home';
import ListPage from '../pages/List';
import GamePage from '../pages/Game';
import MakePage from '../pages/Make';

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
			{
				path: '/game',
				element: <GamePage />,
			},
			{
				path: '/make',
				element: <MakePage />,
			},
		],
	},
]);

export default router;
